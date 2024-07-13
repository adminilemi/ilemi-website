'use client';

import { useRef, useState } from 'react';
import '../Auths.scss';

import { useRouter } from 'next/navigation';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import BrandLogo from '@/components/BrandLogo';
import Spinner from '@/spinner/Spinner';
import RightSide from '@/components/AuthComp/RightSide';
import { passwordChangeReq } from '@/Api/AuthApis';
import toast from 'react-hot-toast';

function ResetPasswordRequest() {
  const { errors, setErrors, loading, setLoading, handleError } =
    useGlobalHooks();
  const [resetEmail, setResetEmail] = useState({ email: '' });
  const route = useRouter();
  const inputRef = useRef(null);

  // get the form input data
  const handleChange = (e) => {
    setResetEmail({ ...resetEmail, [e.target.name]: e.target.value });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(() => ({ ['reset']: true }));

    try {
      const rsp = await passwordChangeReq(resetEmail.email);

      if (rsp.code === 200) {
        toast.success(rsp?.message);
        route.push('/auth/reset-password');
      }
      setLoading(() => ({ ['reset']: false }));
    } catch (error) {
      console.log(error);
      setLoading(() => ({ ['reset']: false }));
    }
  };

  return (
    <div className={` reset flex flex-col md:flex-row `}>
      <section className='flex flex-col aside '>
        <header className='border-bottom py-2 mb-3 bg-mainColor'>
          <div className='container'>
            <BrandLogo className='w-[10%]' />
          </div>
        </header>

        <aside className='w-9/12 mt-10 mx-auto'>
          <form
            className={` form flex flex-col`}
            onSubmit={handleResetPassword}
          >
            <h2>Reset Password</h2>
            <p> Please enter your email to reset your password</p>
            <section className='mb-3 mt-4'>
              <label className='labelTitle' htmlFor='email'>
                {' '}
                Email
              </label>
              <div>
                <input
                  ref={inputRef}
                  type='email'
                  id='email'
                  name='email'
                  placeholder='example@gmail.com'
                  onChange={handleChange}
                  defaultValue={resetEmail.email}
                  className={` formInput ${
                    errors.errMessage === 'empty' ? 'errors' : ''
                  } form-control `}
                  required
                />
              </div>
            </section>

            <div className=' w-full text-center'>
              <button className='main-btn w-full mt-3'>
                {loading['reset'] ? <Spinner /> : 'Reset'}
              </button>
              {errors.errMessage === 'empty' ? (
                <span className='error_message'>
                  {' '}
                  All field must be filled{' '}
                </span>
              ) : (
                <span className='error_message'> {errors.errMessage} </span>
              )}
            </div>
          </form>
        </aside>
      </section>
      <RightSide title='Get the right people to get your job done right' />
    </div>
  );
}

export default ResetPasswordRequest;
