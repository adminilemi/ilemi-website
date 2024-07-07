import React from 'react';
import styles from './Forlandlords.module.scss';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import manageProp from '@/public/assets/manageProp.png';

export default function ForLandLords() {
  return (
    <main className={styles.forLandlords}>
      <section
        className={`${styles.hero} flex justify-center items-center p-3`}
      ></section>

      <section
        className={`container mt-5 flex flex-col md:flex-row justify-between ${styles.everyOne}  items-center`}
      >
        <figure data-aos='zoom-in' className='w-11/12 md:w-5/12 my-5 md:my-0'>
          <Image src={manageProp} alt='' />
        </figure>

        <article
          className={` ${styles.contents} w-full md:w-6/12 content text-center md:text-start`}
        >
          <h3 className='my-5'>
            Your investment, our expertise – a perfect partnership for property
            success.
          </h3>

          <div data-aos='fade-in' className='w-full md:w-8/12 '>
            <hgroup className='w-full md:w-7/12 '>
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
                className='main-btn flex gap-2 justify-center items-center my-3'
              >
                {' '}
                <FaWhatsapp size={20} />
                <span>Send Us a Message</span>
              </a>
            </div>
          </div>
          <div data-aos='fade-right' className='w-full md:w-8/12 mt-5'>
            <hgroup className='w-11/12 md:w-7/12 '>
              <h4>RENT MY PROPERTY</h4>
            </hgroup>
            <p className=' my-4'>
              We take the stress out of Letting your property. <br /> <br />
              Our experts will handle all processes of letting your property
              from Managing your property, it&apos;s maintenance, getting the
              right tenant and rental value for your property to ensuring all
              regulatory dues are met.
            </p>

            <div className='my-10'>
              <a
                href='https://wa.me/+2349045005000'
                className='main-btn flex gap-2 justify-center items-center my-3'
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
        className='text-center my-5 w-11/12 container '
      >
        <h2 className='my-5 w-11/12 md:w-10/12 mx-auto'>
          For Joint Venture development of your property Speak to us now.
        </h2>

        <div className=' w-11/12 md:w-3/12 mx-auto'>
          <a
            href='https://wa.me/+2349045005000'
            className='main-btn flex gap-2 justify-center items-center my-3'
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
