import React from 'react';
import styles from './Advertise.module.scss';
import comingSoon from '@/public/assets/comingSoon.svg';
import Image from 'next/image';

export default function Advertise() {
  return (
    <main className={styles.advertise}>
      <section className='container  text-center'>
        <article className='d-flex flex-column'>
          <div className='my-4'>
            <h2>WE ARE COMING SOON!!</h2>
            <p>Stay tuned for something amazing</p>
          </div>

          <figure className='col-12 col-md-8 mx-auto my-5'>
            <Image src={comingSoon} alt='' />
          </figure>

          <h5>Subscribe to our mailing list to get latest updates</h5>
          <form className='col-12 col-md-8 mx-auto my-4 d-flex justify-content-between align-items-center'>
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
