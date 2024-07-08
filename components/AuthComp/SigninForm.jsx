'use client';
import React, { useRef, useState } from 'react';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import Spinner from '@/spinner/Spinner';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { useCookies } from '@/Hooks/cookiesHook';
import { getUserAvatar, userAuthData } from '@/Redux/Features/userAuthSlice';
import { getCurrentUser } from '@/Redux/Features/userDatasSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { GoogleIcon } from '@/SVGs/SVGFiles';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  HouseAddress: '',
  password: '',
  confirmPass: '',
  FSOReferral: '',
};

const SigninForm = () => {
  const [passwordType, setPasswordType] = useState(false);
  const { loading, setLoading, errors, setErrors } = useGlobalHooks();
  const [userData, setUserData] = useState({ email: '', password: '' });

  const inputRef = useRef(null);
  const navigate = useRouter();
  const { setCookies } = useCookies();
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
    setLoading(true);

    // API.SignIn(userData)
    //   .then((res) => {
    //     const successMessage = {
    //       success: true,
    //       message: res.data.message,
    //     };

    //     const userToken = res.data.data.token;
    //     const userId = res.data.data.user._id;
    //     const userEmail = res.data.data.user.email;
    //     const userName = res.data.data.user.CompanyName;
    //     const profileImage = res.data.data.user.profilePic;
    //     const isOnboarded = res.data.data.user.onBoarded;

    //     showAlert(successMessage.message);

    //     setCookies('ilemiUserToken', userToken);

    //     dispatch(getUserAvatar(profileImage));
    //     dispatch(updateIsOnboarded(isOnboarded));
    //     dispatch(userAuthData({ userId, userEmail, userName }));
    //     dispatch(getCurrentUser(res.data.data.user));

    //     setLoading(false);
    //     setSession();

    //     if (!isOnboarded) {
    //       navigate('/onboarding');
    //     } else {
    //       navigate('/');
    //     }
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     const erroMessage = {
    //       success: false,
    //       message:
    //         err && err.response
    //           ? err.response.data.message
    //           : 'We encounter an error',
    //     };

    //     setErrors({ error: true, errMessage: erroMessage.message });
    //   });
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
          {loading['singin'] ? <Spinner /> : 'Log In'}
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
