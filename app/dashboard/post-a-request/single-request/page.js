import GoBack from '@/components/GoBack';
import StepForm from '@/components/StepForms/StepForm';
import React from 'react';

export default function page() {
  return (
    <main className='container flex flex-col bg-white'>
      <div>
        <GoBack />
      </div>

      <section className='text-center mb-3 mt-5 w-full md:6 mx-auto'>
        {' '}
        <h2 className='font-bold'>Post A Request</h2>
        <p className='my-4 text-grey-300 '>
          Make sure you have filled in all the necessary fields and have
          uploaded all the required files.
        </p>{' '}
      </section>

      <section className=' mb-5 w-full md:10 mx-auto'>
        <StepForm />
      </section>
    </main>
  );
}
