'use client';
import React, { useRef, useState } from 'react';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import Spinner from '@/spinner/Spinner';
import { useGlobalHooks } from '@/Hooks/globalHooks';

import {
  getCurrentUser,
  getCurrentUserData,
} from '@/Redux/Features/userDatasSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { CreateUser } from '@/Api/AuthApis';
import { getUserEmail } from '@/Redux/Features/userAuthSlice';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPass: '',
};

const SignUpForm = () => {
  const [passwordType, setPasswordType] = useState(false);
  const [userData, setUserData] = useState(initialState);
  const { loading, setLoading, errors, setErrors, handleError } =
    useGlobalHooks();

  const route = useRouter();

  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const showPassword = (id) => {
    setPasswordType((prev) => ({ ...passwordType, [id]: !prev[id] }));
  };

  // // get the form input data
  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      setUserData({ ...userData, [e.target.id]: e.target.checked });
    } else {
      setUserData({ ...userData, [e.target.id]: e.target.value });
    }
  };

  // Check if password has Uppercaseletter
  const strongPassword = (str) => {
    // eslint-disable-next-line no-useless-escape
    const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const hasNum = '0123456789';

    let messages = [];

    // Loop through the str to check if there's atleast 1 Upper case letter
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        messages.push('hasUpperLetter');
      }
      // Check if password has special character with this regex specialChar
      if (str[i].match(specialChar)) {
        messages.push('hasSpecialChar');
      }

      // Check if password has number
      if (hasNum.includes(str[i])) {
        messages.push('hasNum');
      }
    }

    setErrors({ errMessage: messages.join('') });
    return messages;
  };

  // // Validate input
  const validateInput = ({ password, confirmPass }) => {
    if (password === '' || confirmPass === '') {
      setErrors({ error: true, errMessage: 'empty' });
      return false;
    }

    if (
      password &&
      strongPassword(password).includes('hasNum') &&
      strongPassword(password).includes('hasSpecialChar') &&
      strongPassword(password).includes('hasUpperLetter')
    ) {
      setErrors({ error: false, errMessage: '' });
      // Additional logic if needed for a strong password
    } else {
      setErrors({ error: true, errMessage: 'weakPassword' });
      return false;
    }

    if (confirmPass !== password) {
      setErrors({ error: true, errMessage: 'confirmpass' });
      return false;
    }

    setErrors({ error: false });

    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const validInput = validateInput(userData);

    // if the input isn't validated, return
    if (!validInput) {
      setLoading(false);
      return;
    }
    setLoading(() => ({ ['signup']: true }));

    try {
      const rsp = await CreateUser(userData);
      console.log(rsp);

      setLoading(() => ({ ['signup']: false }));

      if (rsp?.error) {
        handleError(rsp?.message);
      } else {
        toast.success(rsp?.message);

        dispatch(getCurrentUserData(rsp?.data?.user));
        dispatch(getUserEmail(userData?.email));
        // route.push('/auth/verify-email');
      }
    } catch (err) {
      console.log(err);
      setLoading(() => ({ ['signup']: false }));
    }
  };
  return (
    <form
      className={` form flex flex-wrap justify-between mt-3`}
      onSubmit={handleSignUp}
    >
      <section className='mb-3 inputWrapper'>
        <label htmlFor='First Name' className='labelTitle'>
          {' '}
          First Name
        </label>
        <div>
          <input
            ref={inputRef}
            type='text'
            id='firstName'
            name='firstName'
            onChange={handleChange}
            defaultValue={userData.firstName}
            placeholder=' Enter first name'
            minLength='3'
            required
            className={` formInput ${
              errors.errMessage === 'empty' ? 'errors' : ''
            } form-control `}
          />
        </div>
      </section>

      <section className='mb-3 inputWrapper'>
        <label htmlFor='Last Name' className='labelTitle'>
          {' '}
          Last Name
        </label>
        <div>
          <input
            ref={inputRef}
            type='text'
            id='lastName'
            name='lastName'
            onChange={handleChange}
            defaultValue={userData.lastName}
            placeholder=' Enter last name'
            minLength='3'
            required
            className={` formInput ${
              errors.errMessage === 'empty' ? 'errors' : ''
            } form-control `}
          />
        </div>
      </section>

      <section className='mb-3 w-full'>
        <label htmlFor='email' className='labelTitle'>
          {' '}
          Email
        </label>
        <div>
          <input
            ref={inputRef}
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            onChange={handleChange}
            defaultValue={userData.email}
            required
            className={` formInput ${
              errors.errMessage === 'email' || errors.errMessage === 'empty'
                ? 'errors'
                : ''
            } form-control `}
          />
        </div>
        {errors.errMessage === 'email' ? (
          <span className='error_message'>
            {' '}
            Please enter a valid email e.g example@mail.com{' '}
          </span>
        ) : (
          ''
        )}
      </section>
      <section className='mb-3 w-full'>
        <label htmlFor='Phone Number' className='labelTitle'>
          {' '}
          Phone Number
        </label>
        <div>
          <input
            ref={inputRef}
            type='tel'
            id='phoneNumber'
            name='phoneNumber'
            placeholder='Enter your phone number'
            onChange={handleChange}
            defaultValue={userData.phoneNumber}
            required
            className={` formInput ${
              errors.errMessage === 'phoneNumber' ||
              errors.errMessage === 'empty'
                ? 'errors'
                : ''
            } form-control `}
          />
        </div>
        {errors.errMessage === 'phoneNumber' ? (
          <span className='error_message'>
            {' '}
            Please enter a valid phone number{' '}
          </span>
        ) : (
          ''
        )}
      </section>

      <section className='w-full mb-3 flex flex-wrap justify-between gap-y-3'>
        <div className='password inputWrapper'>
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
              placeholder='Enter password'
              onChange={(e) => handleChange(e)}
              defaultValue={userData.password}
              className={` formInput ${
                errors.errMessage === 'weakPassword' ||
                errors.errMessage === 'empty'
                  ? 'errors'
                  : ''
              }  form-control `}
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
          {/* <small className='charLong'>
                  Must be at least 8 characters.
                </small> */}

          {errors.errMessage === 'weakPassword' && (
            <span className='error_message'>
              {' '}
              Your password is weak, please use combination of Upper letter
              number and special characters{' '}
            </span>
          )}
        </div>

        <div className=' inputWrapper'>
          <label htmlFor='confirmPass' className='labelTitle'>
            Re-enter Password
          </label>
          <div className={`inputContainer flex flex-row items-center `}>
            <input
              ref={inputRef}
              id='confirmPass'
              type={!passwordType['confirmPass'] ? 'password' : 'text'}
              name='password'
              onChange={handleChange}
              defaultValue={userData.confirmPass}
              placeholder='Re-enter password'
              className={`formInput  ${
                errors?.errMessage === 'confirmpass' ||
                errors?.errMessage === 'empty'
                  ? 'errors'
                  : ''
              } form-control `}
            />{' '}
            <div onClick={() => showPassword('confirmPass')} className='icon'>
              {!passwordType['confirmPass'] ? (
                <BsFillEyeSlashFill />
              ) : (
                <BsFillEyeFill />
              )}
            </div>
          </div>
          {errors?.errMessage === 'confirmpass' ? (
            <span className='error_message'> Your password do not match</span>
          ) : (
            ''
          )}
        </div>
      </section>

      <div className=' w-full text-center'>
        <button className='main-btn w-full mt-2' type='submit'>
          {loading['signup'] ? <Spinner /> : 'Sign Up'}
        </button>
        {errors.errMessage === 'empty' ? (
          <span className='error_message'> All field must be filled </span>
        ) : (
          <span className='error_message'> {errors.errMessage} </span>
        )}
      </div>

      <p className='mt-2 '>
        Already have an account?
        <Link className='Login' href='/auth/signin'>
          <strong> Login </strong>
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
