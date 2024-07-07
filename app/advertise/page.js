import React from 'react';
import styles from './Advertise.module.scss';
import comingSoon from '@/public/assets/comingSoon.svg';
import Image from 'next/image';

export default function Advertise() {
  return (
    <main className={styles.advertise}>
      <section className='container  text-center'>
        <article className='flex flex-col'>
          <div className='my-4'>
            <h2>COMING SOON!!</h2>
            <p>Stay tuned for something amazing</p>
          </div>

          <figure className='w-11/12 md:w-8/12 mx-auto my-5'>
            <Image src={comingSoon} alt='' />
          </figure>

          <h5>Subscribe to our mailing list to get latest updates</h5>
          <form className='w-11/12 md:w-8/12 mx-auto my-4 flex justify-between items-center'>
            <input type='email' id='email' name='email' placeholder='email' />
            <button className='main-btn' type='submit'>
              Subscribe
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}
