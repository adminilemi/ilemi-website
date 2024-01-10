import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import BrandLogo from '../BrandLogo';
import { images } from '@/exports/images';

function Footer() {
  return (
    <footer className='d-flex flex-column'>
      <section className={`${styles.footerBlack} text-center `}>
        <svg
          width='147'
          height='148'
          viewBox='0 0 147 148'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <mask
            id='mask0_2932_1691'
            style={{ maskType: 'alpha' }}
            maskUnits='userSpaceOnUse'
            x='0'
            y='-148'
            width='147'
            height='296'
          >
            <rect
              x='147'
              y='-148'
              width='295.985'
              height='146.721'
              transform='rotate(90 147 -148)'
              fill='#C4C4C4'
            />
          </mask>
          <g mask='url(#mask0_2932_1691)'>
            <path
              d='M-0.721893 -420.42L-523.452 108.694'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M258.707 -164.122L-264.023 364.993'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M25.2211 -394.79L-497.509 134.324'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M284.65 -138.492L-238.08 390.623'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M51.164 -369.16L-471.566 159.954'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M310.593 -112.862L-212.137 416.253'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M77.1069 -343.531L-445.623 185.584'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M336.536 -87.2321L-186.194 441.883'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M103.05 -317.901L-419.68 211.214'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M362.479 -61.6021L-160.251 467.513'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M128.993 -292.271L-393.737 236.844'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M388.422 -35.9723L-134.308 493.142'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M154.936 -266.641L-367.794 262.474'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M414.365 -10.3425L-108.365 518.772'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M180.878 -241.011L-341.851 288.104'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M440.308 15.2874L-82.4223 544.402'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M206.821 -215.381L-315.909 313.733'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M466.25 40.9172L-56.4795 570.032'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M232.764 -189.752L-289.966 339.363'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M492.193 66.547L-30.5366 595.662'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
          </g>
        </svg>
        <div
          data-aos='fade-in'
          className='col-12 col-md-6 mx-auto d-flex flex-column justify-content-between'
        >
          <h2>We would love to build something with you</h2>
          <a href='mailto: info@jupita.co'> Send us an email</a>
        </div>

        <svg
          width='147'
          height='148'
          viewBox='0 0 147 148'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <mask
            id='mask0_2932_1691'
            style={{ maskType: 'alpha' }}
            maskUnits='userSpaceOnUse'
            x='0'
            y='-148'
            width='147'
            height='296'
          >
            <rect
              x='147'
              y='-148'
              width='295.985'
              height='146.721'
              transform='rotate(90 147 -148)'
              fill='#C4C4C4'
            />
          </mask>
          <g mask='url(#mask0_2932_1691)'>
            <path
              d='M-0.721893 -420.42L-523.452 108.694'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M258.707 -164.122L-264.023 364.993'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M25.2211 -394.79L-497.509 134.324'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M284.65 -138.492L-238.08 390.623'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M51.164 -369.16L-471.566 159.954'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M310.593 -112.862L-212.137 416.253'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M77.1069 -343.531L-445.623 185.584'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M336.536 -87.2321L-186.194 441.883'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M103.05 -317.901L-419.68 211.214'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M362.479 -61.6021L-160.251 467.513'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M128.993 -292.271L-393.737 236.844'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M388.422 -35.9723L-134.308 493.142'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M154.936 -266.641L-367.794 262.474'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M414.365 -10.3425L-108.365 518.772'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M180.878 -241.011L-341.851 288.104'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M440.308 15.2874L-82.4223 544.402'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M206.821 -215.381L-315.909 313.733'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M466.25 40.9172L-56.4795 570.032'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M232.764 -189.752L-289.966 339.363'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
            <path
              d='M492.193 66.547L-30.5366 595.662'
              stroke='#CEDBFD'
              strokeWidth='9.32905'
            />
          </g>
        </svg>
      </section>
      <section
        className={`${styles.footer} d-flex flex-column flex-lg-row  justify-content-between `}
      >
        <main className='container d-flex flex-column  col-12 col-lg-7 justify-content-between  '>
          <section className='d-flex flex-column justify-content-between'>
            <article
              className={`${styles.logo}  d-flex flex-column col-8 mx-auto`}
            >
              <div
                className='col-12 col-md-4 mb-5'
                data-aos='zoom-out'
                data-aos-duration='1500'
              >
                <BrandLogo color='var(--white)' />
              </div>
            </article>
            <article
              className='d-flex flex-column flex-md-row col-8 mx-auto justify-content-between'
              data-aos='fade-in'
            >
              <ul className='d-flex flex-column gap-3'>
                <h5>Company</h5>
                <li>
                  <Link href='/ourwork'>Our Work</Link>
                </li>
                <li>
                  <Link href='/about'>Services</Link>
                </li>
                <li>
                  <a
                    href='https://www.jupitaacademy.co.uk/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Academy
                  </a>{' '}
                </li>
                <li>
                  <Link href='/about'>About</Link>
                </li>
              </ul>

              <ul className='d-flex flex-column gap-3'>
                <h5>Support</h5>
                <li>
                  <Link href='/terms'>Contact us</Link>
                </li>
                <li>
                  <Link href='/privacy'>Privacy Policy</Link>
                </li>
              </ul>
              <ul className='d-flex flex-column gap-3'>
                <h5>Social</h5>
                <li>
                  <a
                    href='https://dribbble.com/jupitaagency'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Dribbble
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/jupita.co/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/company/jupitadotco/about/?viewAsMember=true'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </article>
          </section>
          <section className='mt-5 mt-lg-0 col-8 mx-auto'>
            <article className='d-flex gap-3 align-items-center '>
              <figure className='col-2 col-lg-1'>
                <Image src={images.naija} alt='' />
              </figure>
              <address>Workstation Maryland Mall, Lagos</address>
            </article>
            <article className='d-flex gap-3 align-items-center my-3'>
              <figure className='col-2 col-lg-1'>
                <Image src={images.usa} alt='' />
              </figure>
              <address>
                651 N Broad St, Suite 201, Middletown, DE 19709, USA
              </address>
            </article>
          </section>
          <section className=' col-8 mx-auto'>
            <small>© 2024 Jupita, All rights reserved</small>
          </section>
        </main>
        <aside className='col-12 col-lg-5 ' data-aos='fade-in'>
          <figure>
            <Image src={images.footer} alt='' />
          </figure>
        </aside>
      </section>
    </footer>
  );
}

export default Footer;
