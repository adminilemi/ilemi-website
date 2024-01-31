import React from 'react';
import styles from './AboutUs.module.scss';
import everyOneImage from '@/public/assets/sittingRoomImage.svg';
import craftiingImage from '@/public/assets/familyAndGroundBuilding.svg';
import creatingChangeImage from '@/public/assets/familyImage.svg';
import Image from 'next/image';
import AreYourALandord from '@/components/AreYourALandord';

export default function AboutUs() {
  return (
    <main className={styles.About}>
      <section
        className={`${styles.aboutHero} d-flex justify-content-center align-items-center p-3`}
      >
        <h2 className='col-12 col-md-8 mx-auto'>
          Revolutionizing real estate for seamless transitions between
          properties, making the process easier than ever before.
        </h2>
      </section>

      <section
        className={`container mt-5 d-flex flex-column flex-md-row justify-content-between ${styles.everyOne}  align-items-center`}
      >
        <figure data-aos='zoom-in' className='col-12 col-md-5 my-5 my-md-0'>
          <Image src={everyOneImage} alt='' />
        </figure>

        <div className='col-12 col-md-6 content text-center text-md-start'>
          <h3>Everyone deserves a home they love!</h3>
          <p className='my-4'>
            Aplace of comfort, belonging, and joy. We strive to make the dream
            of finding that perfect home a reality for everyone. At the core of
            this belief is the understanding that home is more than just a
            physical space; it&apos;s a haven where memories are created, dreams
            take root, and life unfolds. Regardless of background or
            circumstance, the right to a home that resonates with one&apos;s
            heart is a fundamental human need. It&apos;s a place where
            individuals find solace, belonging, and the freedom to express their
            unique identity. Creating spaces that inspire love and joy
            contributes to a richer, more inclusive world for all.
          </p>
        </div>
      </section>

      <section
        className={`${styles.findNew} mx-auto d-flex flex-column flex-md-row justify-content-between align-items-center`}
      >
        <article data-aos='fade-left' className='content col-12 col-md-5'>
          <h2 className='mb-3'>
            Crafting a transactional journey without friction.
          </h2>
          <p>
            Our real estate experience is designed to eliminate hurdles and make
            every step effortless for you.
          </p>
        </article>

        <article
          className={` ${styles.homeImage} col-12 col-lg-7 mb-4 mb-lg-0`}
        >
          <figure data-aos='zoom-in' className='d-none d-md-flex'>
            <Image src={craftiingImage} alt='' />
          </figure>
          <figure className={` ${styles.mobileHome} d-flex d-md-none`}>
            <Image src={craftiingImage} alt='' className=' ' />
          </figure>
        </article>
      </section>

      <section
        className={`container ${styles.createChange} d-flex flex-column flex-md-row justify-content-between align-items-center mt-5`}
      >
        <figure data-aos='zoom-in' className='col-12 col-md-6 my-5 my-md-0'>
          <Image src={creatingChangeImage} alt='happy family' />
        </figure>

        <div
          data-aos='fade-right'
          className=' col-12 col-md-5 align-items-center content text-center text-md-start'
        >
          <h3>Creating change in our communities.</h3>
          <p className='my-4'>
            We hold the belief that homes are fundamental to life. Utilizing our
            platform and influence in the housing sector, we initiate
            discussions and take action on crucial issues, contributing to
            community welfare.
          </p>
          <h3>Join us as we work to replatform real estate.</h3>
        </div>
      </section>

      <section className={styles.newsLetter}>
        <AreYourALandord styles={styles} />
      </section>
    </main>
  );
}
