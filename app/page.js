import HomeHero from '@/components/HomeComps/HomeHero';
import styles from './page.module.scss';
import Image from 'next/image';
import { images } from '@/exports/images';
import AreYourALandord from '@/components/AreYourALandord';

export default function Home() {
  return (
    <main className={styles.home}>
      <HomeHero styles={styles} />

      <section className={styles.BG}>
        <section
          className={`${styles.findSection} container d-flex flex-column flex-md-row justify-content-between`}
        >
          <article
            data-aos='zoom-in'
            className={`${styles.homeBg} col-12 col-md-5`}
          >
            <h3>The new way to find your new office</h3>
            <p className='my-3'>
              Find your dream place office space with more than 10k+ properties
              listed.
            </p>

            <div className='mt-3'>
              <button type='button' className='main-btn'>
                Browse Properties
              </button>
            </div>
          </article>

          <article
            className={`${styles.benefits} d-flex flex-wrap justify-content-between gap-3 col-12 col-md-6  mt-5 mt-md-0`}
          >
            <div data-aos='fade-in' className='col-12 col-md-5'>
              <figure className='col-3'>
                <Image src={images.rentals} alt='' />
              </figure>
              <h4 className='my-2'>Property Insurance</h4>
              <p>
                We offer our customer property protection of liability coverage
                and insurance for their better life.
              </p>
            </div>
            <div data-aos='fade-in' className='col-12 col-md-5'>
              <figure className='col-3'>
                <Image src={images.propSearch} alt='' />
              </figure>
              <h4 className='my-2'>Best Price</h4>
              <p>
                Not sure what you should be charging for your property? No need
                to worry, let us do the numbers for you.
              </p>
            </div>
            <div data-aos='fade-in' className='col-12 col-md-5'>
              <figure className='col-3'>
                <Image src={images.rentals} alt='' />
              </figure>
              <h4 className='my-2'>Lowest Commission</h4>
              <p>
                You no longer have to negotiate commissions and haggle with
                other agents it only cost 2%!
              </p>
            </div>
            <div data-aos='fade-in' className='col-12 col-md-5'>
              <figure className='col-3'>
                <Image src={images.propSearch} alt='' />
              </figure>
              <h4 className='my-2'>Overall Control</h4>
              <p>
                Get a virtual tour, and schedule visits before you rent or buy
                any properties. You get overall control.
              </p>
            </div>
          </article>
        </section>

        <section className={styles.makeItEasy}>
          <article className='container d-flex flex-column flex-md-row justify-content-between'>
            <h3 className='col-12 col-md-5'>
              We make it easy for <em> tenants </em>and<em> landlords.</em>
            </h3>

            <p className='col-12 col-md-5'>
              Whether it&apos;s selling your current property, getting fan
              office space, or buying a new property, we make it easy and
              efficient. The best part? you&apos;ll save a bunch of money and
              time with our services.
            </p>
          </article>
          <article className='container d-flex justify-content-center gap-5 text-center my-5'>
            <div>
              <h4>7.4%</h4>
              <p>Property Return Rate</p>
            </div>
            <div>
              <h4>3,856</h4>
              <p>Property in Sell & Rent</p>
            </div>
            <div>
              <h4>2,540</h4>
              <p>Daily Completed Transactions</p>
            </div>
          </article>
        </section>

        <section className={styles.newsLetter}>
          <AreYourALandord styles={styles} />
        </section>
      </section>
    </main>
  );
}
