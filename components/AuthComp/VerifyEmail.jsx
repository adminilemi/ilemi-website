'use client';

import { resendOTP, verifyWithOTP } from '@/Api/AuthApis';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { selectUserData } from '@/Redux/Features/userAuthSlice';
import Spinner from '@/spinner/Spinner';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const numInput = [
  { id: 1, name: 'num1' },
  { id: 2, name: 'num2' },
  { id: 3, name: 'num3' },
  { id: 4, name: 'num4' },
];
const VerifyEmail = () => {
  const { loading, setLoading, errors, handleError } = useGlobalHooks();

  const route = useRouter();

  const { authUser } = useSelector(selectUserData);

  const [verifyCode, setVerifyCode] = useState({
    num1: '',
    num2: '',
    num3: '',
    num4: '',
  });

  const inputRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    setVerifyCode({ ...verifyCode, [`num${index + 1}`]: value });

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleReSendOTP = async () => {
    setLoading(() => ({ ['resend']: true }));

    try {
      const rsp = await resendOTP(authUser?.userId);

      if (rsp.error) {
        handleError(rsp?.message);
      } else {
        toast.success(rsp?.message);
      }
      setLoading(() => ({ ['resend']: false }));
    } catch (error) {
      console.log(error);
      setLoading(() => ({ ['resend']: false }));
    }
  };

  const handleVerifyEmail = async (e) => {
    // e.preventDefault();

    setLoading(() => ({ ['verify']: true }));

    if (Object.keys(verifyCode).some((code) => code === '')) {
      handleError('Enter the code sent to your email');
    }

    const verificationCode = Object.values(verifyCode).join('');

    try {
      const rsp = await verifyWithOTP({
        userId: authUser.userId,
        uniqueVerificationCode: verificationCode,
      });

      if (rsp.error) {
        handleError(rsp?.message);
      } else {
        toast.success(rsp?.message);
        route.push('/dashboard');
      }
      setLoading(() => ({ ['verify']: false }));
    } catch (error) {
      console.log(error);
      setLoading(() => ({ ['verify']: false }));
    }
  };

  // When delete is pressed it should delete backward and jump focus to current input
  const handleKeyPress = (e, index) => {
    // Detect if backspace or delete key is clicked, if yes and the current input value is empty, jump backward to next one if available
    if (e.key === 'Backspace' && !e.currentTarget?.value && index > 0) {
      inputRefs.current[index - 1].current?.focus();
    }
  };
  // Auto focus on component mount
  useEffect(() => {
    inputRefs.current[0].current?.focus();
  }, []);

  useEffect(() => {
    if (
      verifyCode.num1 &&
      verifyCode.num2 &&
      verifyCode.num3 &&
      verifyCode.num4
    ) {
      handleVerifyEmail();
    }
  }, [verifyCode]);

  // console.log(errors);

  return (
    <section className='w-11/12 lg:w-6/12 '>
      <form
        className={` form flex flex-col justify-center text-start w-full md:2`}
        // onSubmit={handleVerifyEmail}
      >
        <h3 className='font-bold'>Verify your email</h3>
        <p className='mt-2'>
          Enter the verification code sent to {authUser.userEmail}{' '}
        </p>
        <div
          className={` inputContainer flex flex-row mx-auto w-full gap-2 mt-3 `}
        >
          {numInput.map(({ id, name }, idx) => (
            <div className='numInp ' key={id}>
              <input
                ref={inputRefs.current[idx]}
                id={id}
                type='text'
                name={name}
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyPress(e, idx)}
                maxLength={1}
                defaultValue={verifyCode[name]}
                className={`${
                  errors.error && 'errors animate__animated  animate__shakeY'
                }  text-center form-control py-4`}
                required
              />
            </div>
          ))}
        </div>

        <div className=' w-full text-center'>
          <button className='main-btn w-full mt-3' type='submit'>
            {loading['verify'] ? 'Validating...' : 'Validate'}
          </button>

          {errors.error && (
            <span className='error_message mt-3'> {errors.errMessage} </span>
          )}
        </div>
      </form>

      <button className='mt-3'>
        <small onClick={handleReSendOTP}>
          Didn&apos;t get code? <strong>Resend</strong>
        </small>
      </button>

      {loading['resend'] && <Spinner />}
    </section>
  );
};

export default VerifyEmail;
