import React from 'react';
import styles from './Forlandlords.module.scss';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import manageProp from '@/public/assets/manageProp.png';

export default function ForLandLords() {
  return (
    <main className={styles.forLandlords}>
      <section
        className={`${styles.hero} d-flex justify-content-center align-items-center p-3`}
      ></section>

      <section
        className={`container mt-5 d-flex flex-column flex-md-row justify-content-between ${styles.everyOne}  align-items-center`}
      >
        <figure data-aos='zoom-in' className='col-12 col-md-5 my-5 my-md-0'>
          <Image src={manageProp} alt='' />
        </figure>

        <article
          className={` ${styles.contents} col-12 col-md-6 content text-center text-md-start`}
        >
          <h3 className='my-5'>
            Your investment, our expertise – a perfect partnership for property
            success.
          </h3>

          <div data-aos='fade-in' className='col-12 col-md-8 '>
            <hgroup className='col-12 col-md-7 '>
              <h4>SELL MY PROPERTY</h4>
            </hgroup>
            <p className=' my-4'>
              Our experts are with you from Valuation to completion,ensuring
              your sale stays on track and delivering the best possible price in
              the shortest possible time.
            </p>

            <div>
              <a
                href='https://wa.me/+2349045005000'
                className='main-btn d-flex gap-2 justify-content-center align-items-center my-3'
              >
                {' '}
                <FaWhatsapp size={20} />
                <span>Send Us a Message</span>
              </a>
            </div>
          </div>
          <div data-aos='fade-right' className='col-12 col-md-8 mt-5'>
            <hgroup className='col-12 col-md-7 '>
              <h4>RENT MY PROPERTY</h4>
            </hgroup>
            <p className=' my-4'>
              We take the stress out of Letting your property. <br /> <br />
              Our experts will handle all processes of letting your property
              from Managing your property, it&apos;s maintenance, getting the
              right tenant and rental value for your property to ensuring all
              regulatory dues are met.
            </p>

            <div>
              <a
                href='https://wa.me/+2349045005000'
                className='main-btn d-flex gap-2 justify-content-center align-items-center my-3'
              >
                {' '}
                <FaWhatsapp size={20} />
                <span>Send Us a Message</span>
              </a>
            </div>
          </div>
        </article>
      </section>

      <section
        data-aos='zoom-out'
        className='text-center my-5 col-12 container '
      >
        <h2 className='my-5 col-12 col-md-10 mx-auto'>
          For Joint Venture development of your property Speak to us now.
        </h2>

        <div className=' col-12 col-md-3 mx-auto'>
          <a
            href='https://wa.me/+2349045005000'
            className='main-btn d-flex gap-2 justify-content-center align-items-center my-3'
          >
            {' '}
            <FaWhatsapp size={20} />
            <span>Send Us a Message</span>
          </a>
        </div>
      </section>
    </main>
  );
}
