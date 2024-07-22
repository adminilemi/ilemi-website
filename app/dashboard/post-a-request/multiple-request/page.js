import MultipleRequest from '@/components/DashboardComp/MultipleRequest/MultipleRequest';
import GoBack from '@/components/GoBack';
import React from 'react';

export default function page() {
  return (
    <main className='container flex flex-col '>
      <header>
        <GoBack />
      </header>

      <article className='text-center mb-3 mt-5 w-full md:6 mx-auto'>
        {' '}
        <h2 className='font-bold text-2xl'>Post A Request</h2>
        <p className='my-4 text-grey-300 '>
          Make sure you have filled in all the necessary fields and have
          uploaded all the required files.
        </p>{' '}
      </article>

      <section className=' mb-5 w-full md:10 mx-auto'>
        <MultipleRequest />
      </section>
    </main>
  );
}
