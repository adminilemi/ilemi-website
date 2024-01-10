import React from 'react';
import styles from './About.module.scss';
import Image from 'next/image';
import { images } from '@/exports/images';

export default function Buy() {
  const teamData = [
    {
      id: 1,
      name: 'Buhari Jemilu',
      role: 'Founder',
      social: 'LinkedIn',
      imageUrl: images.team,
    },
    {
      id: 2,
      name: 'Sodeeq Awoyemi',
      role: 'Frontend Engineer',
      social: 'LinkedIn',
      imageUrl: images.team,
    },
    {
      id: 3,
      name: 'Osita Stephen',
      role: 'Backend Engineer',
      social: 'LinkedIn',
      imageUrl: images.team,
    },
    {
      id: 4,
      name: 'Buhari Hassan',
      role: 'Frontend Engineering Intern',
      social: 'LinkedIn',
      imageUrl: images.team,
    },
    {
      id: 5,
      name: 'David Odafe',
      role: 'Product Designer',
      social: 'LinkedIn',
      imageUrl: images.team,
    },
    {
      id: 6,
      name: 'Daniel Esivue',
      role: 'Mobile Engineer',
      social: 'LinkedIn',
      imageUrl: images.team,
    },
  ];

  return (
    <main className={styles.about}>
      <section className='container  my-5 animate__animated animate__backInLeft'>
        <h2 className='my-3 col-12 col-md-10 '>Creative digital solutions</h2>
        <p className='col-12 col-md-9'>
          We are creators, thinkers and explorers. We design and build digital
          products not just for fun but, because we are curious people driven by
          continuous learning and solving problems skills. We have been helping
          businesses grow, through designing and creating digital platforms to
          connect with targeted audience, efficiently and effectively.
        </p>
      </section>

      <figure className='animate__animated animate__zoomInLeft'>
        <Image src={images.creativeDigital} alt='Jupita creative agency' />
      </figure>

      <section className={`${styles.tech} text-center `}>
        <div className='col-12 col-md-6 mx-auto my-5'>
          <h5>Our goal</h5>
          <h3 className='col-12 col-md-9 mx-auto my-3'>
            Your technology partner for success
          </h3>
          <p className='my-3'>
            Jupita is born to innovation digital products and solutions. Our
            objective is to disrupt the market, providing exclusive and
            outstanding creativity, while enjoying your satisfaction. We&apos;re
            here to make your dream come true.
          </p>
        </div>

        <div className='d-flex flex-column flex-md-row justify-content-center gap-3'>
          <figure className='animate__animated animate__zoomInLeft'>
            <Image src={images.partner} alt='Jupita creative agency' />
          </figure>
          <figure className='animate__animated animate__zoomInLeft'>
            <Image src={images.techWoman} alt='Jupita creative agency' />
          </figure>
        </div>
      </section>

      <section className={`${styles.howWe} `}>
        <div className='col-12 col-md-7 mx-auto my-5 text-center '>
          <h5>Our approach</h5>
          <h3 className=' my-3'>How we do it</h3>
          <p className='my-3'>
            We believe that every business needs its roots cradled in something
            profound and strong. That&apos;s why we&apos;ve invested in building
            a strong team of creative individuals who strive to create memorable
            connections with your audience. By bringing together a wide range of
            skills, our team is able to provide a solution that is highly
            relevant and actionable.
          </p>
        </div>

        <ul className='d-flex flex-wrap justify-content-center gap-3 my-5'>
          <li data-aos='zoom-in' className={styles.howWeCard}>
            <h4>Design: Make it Meaningful</h4>
            <p>
              We start by mapping your users journey and give you a sound design
              system for creating your digital products. We focus on
              establishing pixel perfect branding and typographic hierarchy,
              which will work passionately with any digital brand identity you
              want to build.
            </p>
          </li>
          <li data-aos='zoom-in' className={styles.howWeCard}>
            <h4>User experience and content strategy that drive results</h4>
            <p>
              Sometimes you have to start with the small details to make a big
              difference. We are a detail-oriented agency that creates
              subcultures and movements.
            </p>
          </li>
          <li data-aos='zoom-in' className={styles.howWeCard}>
            <h4>An agile-inspired development</h4>
            <p>
              The goal is to break down the process of planning, development,
              launch and marketing into smaller chunks so that we are able to
              track each step separately.
            </p>
          </li>
          <li data-aos='zoom-in' className={styles.howWeCard}>
            <h4>Prototype Faster and Simulate Better</h4>
            <p>
              It&apos;s important that the client can interact with the working
              model before making any decisions. This will make the entire
              process more transparent to both of us, which is valuable for
              trust.
            </p>
          </li>
        </ul>
      </section>

      <section className={`${styles.team} `}>
        <div className='col-12  my-5 text-center '>
          <h3 className=' my-3'>Meet the team</h3>
        </div>

        <ul className='d-flex flex-wrap justify-content-center gap-3 my-5'>
          {teamData.map(({ id, name, imageUrl, role, social }) => (
            <li key={id} data-aos='zoom-in' className={styles.teamCard}>
              <figure>
                <Image
                  src={imageUrl}
                  alt='Jupita creative agency team memeber'
                />
              </figure>
              <div className='mt-3 d-flex flex-column'>
                <h4>{name}</h4>
                <small> {role} </small>
                <div>
                  <a> {social} </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
