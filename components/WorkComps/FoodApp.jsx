import React from 'react';
// import styles from './OurWork.module.scss';
import Image from 'next/image';
import { images } from '@/exports/images';

const FoodApp = ({ styles }) => {
  return (
    <section className={`${styles.foodDelivery} d-flex align-items-end `}>
      <div className={styles.medicApp}>
        <h5>Nourisha</h5>
        <h3 className='my-3'>
          Food delivery <br />
          Service App
        </h3>
        <p>UI/UX Design</p>

        <div className='mt-4'>
          <a
            href='https://eatnourisha.com/'
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
        <figure className={`col-12 bouncingShape`}>
          <Image
            src={images.foodApp}
            alt='Jupita medical app work  history image'
          />
        </figure>
      </div>
    </section>
  );
};

export default FoodApp;
