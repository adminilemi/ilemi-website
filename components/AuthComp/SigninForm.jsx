'use client';
import { LoginUser } from '@/Api/AuthApis';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { getUserEmail, userAuthData } from '@/Redux/Features/userAuthSlice';
import { getCurrentUserData } from '@/Redux/Features/userDatasSlice';
import Spinner from '@/spinner/Spinner';
import { GoogleIcon } from '@/SVGs/SVGFiles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

const SigninForm = () => {
  const [passwordType, setPasswordType] = useState(false);
  const { loading, setLoading, errors, setErrors, handleError } =
    useGlobalHooks();
  const [userData, setUserData] = useState({ email: '', password: '' });

  const inputRef = useRef(null);
  const route = useRouter();
  const dispatch = useDispatch();

  const showPassword = (id) => {
    setPasswordType((prev) => ({ ...passwordType, [id]: !prev[id] }));
  };

  // get the form input data
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(() => ({ ['signin']: true }));

    try {
      const rsp = await LoginUser(userData);
      console.log(rsp);

      setLoading(() => ({ ['signin']: false }));

      if (rsp?.error) {
        handleError(rsp?.message, true);
      } else {
        toast.success(rsp?.message);

        const userId = rsp?.data?.user?._id;
        const userEmail = rsp?.data?.user?.email;
        const userName = `${rsp?.data?.user.firstName} ${rsp?.data?.user.lastName} `;

        dispatch(getCurrentUserData(rsp?.data?.user));
        dispatch(userAuthData({ userId, userEmail, userName }));
        dispatch(getUserEmail(userData?.email));
        route.push('/auth/verify-email');
      }
    } catch (err) {
      console.log(err);
      setLoading(() => ({ ['signin']: false }));
    }
  };
  return (
    <form
      className={`form flex flex-col justify-between mt-5`}
      onSubmit={handleSignIn}
    >
      <section className='mb-3'>
        <label htmlFor='email' className='labelTitle'>
          {' '}
          Email/Phone number
        </label>
        <div>
          <input
            ref={inputRef}
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email or phone number'
            defaultValue={userData.email}
            onChange={handleChange}
            className={` formInput  form-control `}
            required
          />
        </div>
      </section>
      <section className='w-full mb-3'>
        <div className=''>
          <label htmlFor='password' className='labelTitle'>
            {' '}
            Password{' '}
          </label>
          <div className={` inputContainer flex flex-row items-center`}>
            <input
              ref={inputRef}
              id='password'
              type={!passwordType['password'] ? 'password' : 'text'}
              name='password'
              placeholder='enter your password'
              defaultValue={userData.password}
              onChange={handleChange}
              className={` formInput  form-control `}
              required
            />{' '}
            <div onClick={() => showPassword('password')} className='icon'>
              {!passwordType['password'] ? (
                <BsFillEyeSlashFill />
              ) : (
                <BsFillEyeFill />
              )}
            </div>
          </div>
        </div>
        <div className='forgot  mt-2'>
          <Link href='/auth/reset-password-request' className='!font-semibold'>
            Forgot Password
          </Link>
        </div>
      </section>

      <div className=' w-full text-center'>
        <button className='main-btn w-full mt-1' type='submit'>
          {loading['signin'] ? <Spinner /> : 'Log In'}
        </button>

        <span className='error_message'> {errors?.errMessage} </span>
      </div>
      <div className=' w-full text-center mt-3'>
        <button className='outline-btn w-full mt-1 flex justify-center items-center gap-2'>
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>
      </div>
      <p className='mt-3 text-center'>
        Don&apos;t have an account?
        <Link className='Login' href='/auth/signup'>
          <strong> Sign up for free </strong>
        </Link>
      </p>
    </form>
  );
};

export default SigninForm;
