import React from 'react';
import Button from './Button/Button';

function AreYourALandord() {
  return (
    <section className='landLord mx-auto flex flex-col  justify-between items-center mt-5 text-center'>
      <article className='container'>
        <h4>No Spam Promise</h4>
        <h2>Are you a landlord/ property owner?</h2>
        <p className='my-4'>
          Discover ways to increase your home value and get listed No Spam
        </p>

        <div className='w-11/12 md:w-6 mx-auto'>
          <Button title='JOIN OUR WAIT  LIST' url='/join-form' />
        </div>
        <p>
          Join <strong>10,000</strong>
          +other landlords in our Property4u Waiting List
        </p>
      </article>
    </section>
  );
}

export default AreYourALandord;
