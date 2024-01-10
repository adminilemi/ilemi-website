import React from 'react';
import styles from './OurWork.module.scss';
import Image from 'next/image';
import { images } from '@/exports/images';

const SpraayApp = () => {
  return (
    <main className={`${styles.sprayApp} d-flex flex-column flex-md-row `}>
      <section
        className={` ${styles.spraayContent} col-12 col-md-5 order-1 order-md-0 p-3 d-flex align-items-center`}
      >
        <div className='col-9 mx-auto'>
          <h5>Spraay</h5>
          <h3 className='my-3'>
            Spraay <br /> Financial App
          </h3>
          <p>Development</p>

          <div className='mt-4'>
            <a
              href='https://spraay.ng/'
              target='_blank'
              rel='noreferrer'
              className='outline-btn'
            >
              {' '}
              View More{' '}
            </a>
          </div>
        </div>
      </section>

      <section className='col-12 col-md-7'>
        <figure className='col-12 '>
          <Image
            src={images.sprayApp}
            alt='Jupita medical app work  history image'
          />
        </figure>
      </section>
    </main>
  );
};

export default SpraayApp;
