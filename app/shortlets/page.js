import React from 'react';
import styles from './Services.module.scss';
import Image from 'next/image';
import { images } from '@/exports/images';

export default function Shortlets() {
  return (
    <main className={styles.services}>
      <hgroup className='container my-5'>
        <h2> Services</h2>
      </hgroup>
      <section className={` ${styles.servicesHero}`}>
        <figure
          className={`${styles.shape} animate__animated animate__backInLeft`}
        >
          <Image src={images.shape} alt='' />
        </figure>
        <section className={`${styles.heroContents} container`}>
          <h2 className='animate__animated animate__zoomInUp col-10 ms-5 col-md-6'>
            {' '}
            Going beyond what&apos;s possible
          </h2>
          <p className='animate__animated animate__backInUp col-10 ms-5 col-md-8'>
            Creative minds that don&apos;t know how to let the dream die.
            That&apos;s the mind-state of us, Jupita team. Yes, we are those
            lunatics who sit and daydream for hours and work all night and sleep
            like a baby. We eat coffee in our sleep; works every time.
            We&apos;re here to support you on your journey to create beautiful,
            exceptional, memorable digital solutions.{' '}
          </p>
        </section>
      </section>

      <section
        className={` ${styles.think} d-flex flex-column align-items-center text-center container `}
      >
        <div className='col-12 col-md-9 mx-auto'>
          <h2 data-aos='fade-in' className='col-12 col-md-10 mx-auto '>
            Design thinking meets agile methodology
          </h2>
          <p data-aos='fade-in' className='col-12 col-md-9 mx-auto my-4'>
            We offer a complete range of services that build up business value,
            from the initial idea and formulation of product strategy, through
            building a prototype and testing it with users, right to the
            creation of the product itself.
          </p>
        </div>
        <figure
          data-aos='zoom-in'
          className={`${styles.clipImage} col-12 col-md-10`}
        >
          <Image src={images.digiThink} alt='' />{' '}
        </figure>
      </section>
      {/* ===Design ==== */}
      <section
        className={` ${styles.design} d-flex flex-column align-items-center  container`}
      >
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center '>
          <div data-aos='fade-left' className='col-12 col-md-5 my-5'>
            <h2 className='my-2'>Design</h2>
            <p>
              At Jupita we are more concerned with the entire process of
              acquiring and integrating a project including aspects of branding,
              design, usability and function.
            </p>
          </div>
          <figure data-aos='fade-right' className='col-12 col-md-6'>
            <Image src={images.design} alt='' />{' '}
          </figure>
        </div>
        <ul className=' d-flex flex-column flex-md-row justify-content-center  gap-3 text-center my-5 col-11 col-lg-9 mx-auto'>
          <li data-aos='zoom-in' className={styles.designCard}>
            <p>
              Build well-designed and optimized custom mobile applications with
              a delightful UX for both iOS and Android.
            </p>
          </li>
          <li data-aos='zoom-in' className={styles.designCard}>
            <p>
              Great design is an iterative process of resolving problems and
              continual improvement to make your product the best it can be.
            </p>
          </li>
          <li data-aos='zoom-in' className={styles.designCard}>
            <p>
              Craft delightful user experiences for your digital products. Solve
              real problems and improve your vital business metrics through
              beautiful interfaces.
            </p>
          </li>
        </ul>
      </section>

      {/* ===Development ==== */}
      <section
        className={` ${styles.design} d-flex flex-column align-items-center  container my-5`}
      >
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center '>
          <figure
            data-aos='fade-left'
            className='col-12 col-md-6 order-1 order-md-0'
          >
            <Image src={images.dev} alt='' />{' '}
          </figure>
          <div data-aos='fade-right' className='col-12 col-md-5 my-5'>
            <h2 className='my-2'>Development</h2>
            <p>
              We create, design, code test, and maintain software systems,
              applications, or programs. We deliver job expectations, invest in
              creativity and master our expertise. With this way, we grow
              stronger and better.
            </p>
          </div>
        </div>
        <ul className=' d-flex flex-column flex-md-row justify-content-center  gap-3 text-center my-5 '>
          <li data-aos='zoom-in' className={styles.devCard}>
            <p>
              Make use of the perfect solution when the speed of development is
              crucial to your success.
            </p>
          </li>
          <li data-aos='zoom-in' className={styles.devCard}>
            <p>
              Build performant web applications based on Javascript – one
              language for full-stack development.
            </p>
          </li>
          <li data-aos='zoom-in' className={styles.devCard}>
            <p>
              Build well-designed and optimized custom mobile applications with
              a delightful UX for both iOS and Android.
            </p>
          </li>
          <li data-aos='zoom-in' className={styles.devCard}>
            <p>
              Implement beautiful and responsive user interfaces that are
              highly-interactive and give users a native-like experience.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
