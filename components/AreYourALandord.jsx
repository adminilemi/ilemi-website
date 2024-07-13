import React from 'react';
import Link from 'next/link';

function AreYourALandord({ styles }) {
  return (
    <section
      className={`${styles.landLord} mx-auto flex flex-col  justify-between items-center mt-5 text-center`}
    >
      <article className='container'>
        <h4>No Spam Promise</h4>
        <h2>Are you a landlord or Looking for an apartment?</h2>

        <div className='my-9'>
          <Link href='/contact-us' className='main-btn'>
            {' '}
            Contact Us
          </Link>
        </div>
        <p className='my-4'>
          Discover ways to increase your home&apos;s value and get listed. No
          Spam.
        </p>

        <form
          className={`${styles.newsletterForm} w-11/12 md:w-6/12 mx-auto flex justify-between my-3`}
        >
          <input
            type='email'
            placeholder='Enter your email address'
            className='form-control'
            required
          />{' '}
          <button type='submit' className='main-btn'>
            Submit
          </button>
        </form>
        <p>Join other satisfied landlords using Property4u.ng</p>
      </article>
    </section>
  );
}

export default AreYourALandord;
