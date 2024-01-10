import React from 'react';
// import styles from './OurWork.module.scss';
import Image from 'next/image';
import { images } from '@/exports/images';

const MedicApp = ({ styles }) => {
  return (
    <section className={`${styles.medicWork} d-flex align-items-end `}>
      <div className={styles.medicApp}>
        <h5>Aegle Health</h5>
        <h3 className='my-3'>
          Medical <br /> App
        </h3>
        <p>Design & Development</p>
        <div className='mt-4'>
          <a
            href='https://www.aeglehealth.io/'
            target='_blank'
            rel='noreferrer'
            className='outline-btn'
          >
            {' '}
            View More{' '}
          </a>
        </div>
      </div>

      {/* <div className={`${styles.appImage}`}>
        <figure className='col-12 bouncingShape'>
          <Image
            src={images.medicalApp}
            alt='Jupita medical app work  history image'
          />
        </figure>
      </div> */}
      <div className={`${styles.appImage}`}>
        <figure className='col-12 bouncingShape'>
          <Image
            src={images.medicalApp}
            alt='Jupita medical app work  history image'
          />
        </figure>
      </div>
    </section>
  );
};

export default MedicApp;
