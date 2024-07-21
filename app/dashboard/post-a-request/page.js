import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <main className='container my-9'>
      <h2 className='text-center my-5 text-xl font-bold'>Post A Request</h2>
      <section
        data-aos='zoom-in'
        className='card p-5 w-full md:w-5/12 mx-auto mt-10'
      >
        <h3 className='text-lg font-bold'>
          Select Request Type{' '}
          <span className='text-xs text-grey-300'> ( ₦1000 per Request ) </span>
        </h3>

        <article className='flex flex-wrap just items-center gap-4 mt-6 '>
          <div className='grow flex text-center'>
            <Link
              href='/dashboard/post-a-request/single-request '
              className='main-btn w-full'
            >
              Single Request{' '}
            </Link>
          </div>
          <div className='grow flex text-center'>
            <Link
              href='/dashboard/post-a-request/multiple-request'
              className='outline-btn w-full !text-mainColor'
            >
              Multiple Request{' '}
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
