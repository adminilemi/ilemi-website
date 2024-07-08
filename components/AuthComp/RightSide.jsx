import React from 'react';
import '../../app/auth/Auths.scss';
import propImage from '@/public/assets/authProp.svg';
import poweredby from '@/public/assets/poweredby.png';
import Image from 'next/image';

export default function RightSide() {
  return (
    <section className='right w-[45%] hidden lg:flex flex-col justify-center items-center'>
      <figure className='w-8/12 mx-auto'>
        <Image src={propImage} alt='' />
      </figure>

      <section className='w-10/12'>
        <div className='flex gap-2 items-center'>
          {' '}
          <p> Powered by </p>
          <figure className='w-1/12'>
            <Image src={poweredby} alt='' />
          </figure>
        </div>

        <div>
          <p>
            You agree to Property4u&apos;s{' '}
            <span className='viewMore'>Terms of Use & Privacy Policy.</span> You
            don&apos;t need to consent as a condition of renting any property,
            or buying any other goods or services. Message/data rates may apply.
          </p>
        </div>
      </section>
    </section>
  );
}
