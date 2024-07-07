'use client';

import React from 'react';
import styles from './ContactUs.module.scss';
import addressImage from '@/public/assets/AddressImage.svg';
import phoneImage from '@/public/assets/PhoneImage.svg';
import emailImage from '@/public/assets/EmailImage.svg';
import map from '@/public/assets/map.png';
import { useForm } from '@formspree/react';
import HeroPageReUseable from '@/components/ForContactus/HeroPageReUseable';
import AreYourALandord from '@/components/AreYourALandord';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ContactUs() {
  const router = useRouter();
  const [state, handleSubmit] = useForm('meqbbzne');

  if (state.succeeded) {
    router.push('/success');
  }

  return (
    <main className={styles.contact}>
      <HeroPageReUseable text='Contact us' />
      <section
        className={`container ${styles.contactContent} mt-5 flex flex-col lg:flex-row justify-between`}
      >
        <article className='w-11/12 lg:w-5/12'>
          <h2 className='my-3'>
            Get in <span>Touch</span>
          </h2>
          <p>
            Connect with us; your dream home is just a message away. Let&apos;s
            discuss how we can turn your vision into reality.
          </p>
          <section className='mt-5'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col justify-between'
            >
              <div className={styles.inputWrapper}>
                <input
                  id='fullName'
                  name='fullName'
                  type='text'
                  placeholder='Full Name *'
                  className='form-control'
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Email *'
                  className='form-control'
                  required
                />{' '}
              </div>
              <div className={styles.inputWrapper}>
                <input
                  id='phoneNumber'
                  name='phoneNumber'
                  type='number'
                  placeholder='Phone number *'
                  className='form-control'
                  required
                />{' '}
              </div>
              <div className={styles.inputWrapper}>
                <input
                  id='whatsappNumber'
                  name='whatsappNumber'
                  type='number'
                  placeholder='Whatsapp number *'
                  className='form-control'
                  required
                />{' '}
              </div>
              <div className={styles.inputWrapper}>
                <select
                  className='form-select'
                  id='category'
                  name='category'
                  required
                >
                  <option value=''>How did you find us?</option>
                  <option value='Instagram'>Instagram</option>
                  <option value='Twitter'>Twitter</option>
                  <option value='Facebook'>Facebook</option>
                  <option value='Whatsapp'>Whatsapp</option>
                  <option value='Word of mouth'>Word of mouth</option>
                </select>
              </div>

              <div className={styles.inputWrapper}>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Message'
                  className='form-control'
                  rows={5}
                  required
                ></textarea>
              </div>
              <div className={styles.inputWrapper}>
                <button type='submit' className='main-btn w-11/12'>
                  Send
                </button>
              </div>
            </form>
          </section>

          <section className='flex flex-col'>
            <p className='my-3'>For more information reach out to us via: </p>

            <div className={`flex flex-col ${styles.moreInfo}`}>
              {/* <div className='flex gap-1 w-11/12 my-3'>
                <figure className='w-1/12 '>
                  <Image src={addressImage} className='' alt='logo' />
                </figure>
                <div className='flex flex-col'>
                  <p>ADDRESS</p>
                  <span>17 Olujobi Street, Gbagada Shomolu, Lagos Nigeria</span>
                </div>
              </div> */}
              <div className='flex flex-col lg:flex-row gap-2'>
                <div className='flex gap-1 w-11/12 lg:w-5/12  my-3 lg:my-0'>
                  <figure className='w-1/12 lg:w-2'>
                    <Image src={phoneImage} className='' alt='logo' />
                  </figure>

                  <div className='flex flex-col'>
                    <p> PHONE</p>
                    <a href='tel:+234 904 500 5000'>+234 904 500 5000</a>
                  </div>
                </div>

                <div className='flex gap-1 w-11/12 lg:w-5/12 '>
                  <figure className='w-1/12 lg:w-2'>
                    <Image src={emailImage} className='' alt='logo' />
                  </figure>

                  <div className='flex flex-col'>
                    <p>EMAIL</p>

                    <a href='mailto:enquiries@property4u.ng'>
                      enquiries@property4u.ng
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>

        <aside className='w-11/12 lg:w-6 mt-5 lg:mt-0'>
          <figure>
            <Image src={map} alt='' />
          </figure>
        </aside>
      </section>

      <section className={styles.newsLetter}>
        <AreYourALandord styles={styles} />
      </section>
    </main>
  );
}
