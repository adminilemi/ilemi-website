import React from 'react';
// import styles from './OurWork.module.scss';
import Image from 'next/image';
import { images } from '@/exports/images';

const CryptoApp = ({ styles }) => {
  return (
    <section className={`${styles.cryptoWork} d-flex align-items-end `}>
      <div className={styles.medicApp}>
        <h5>Bitmama</h5>
        <h3 className='my-3'>
          Crypto Exchange <br /> Mobile app
        </h3>
        <p>UI/UX design</p>

        <div className='mt-4'>
          <a
            href='https://bitmama.io/'
            target='_blank'
            rel='noreferrer'
            className='outline-btn'
          >
            {' '}
            View More{' '}
          </a>
        </div>
      </div>

      <div className={`${styles.appImage}`}>
        <figure className='col-12 bouncingShape'>
          <Image
            src={images.cryptoApp}
            alt='Jupita medical app work  history image'
          />
        </figure>
      </div>
    </section>
  );
};

export default CryptoApp;
