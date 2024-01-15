import HomeHero from '@/components/HomeComps/HomeHero';
import styles from './page.module.scss';
import Image from 'next/image';
import { images } from '@/exports/images';
import AreYourALandord from '@/components/AreYourALandord';
import MakeItEasy from '@/components/MakeItEasy';
import AddGifBanner from '@/components/AddGifBanner';
import ProductTabs from '@/components/HomeComps/Products/ProductTabs';

export default async function Home() {
  return (
    <main className={styles.home}>
      <HomeHero styles={styles} />
      <AddGifBanner />
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
                <Image src={images.propInsurance} alt='' />
              </figure>
              <h4 className='my-2'>Property Insurance</h4>
              <p>
                We offer our customer property protection of liability coverage
                and insurance for their better life.
              </p>
            </div>
            <div data-aos='fade-in' className='col-12 col-md-5'>
              <figure className='col-3'>
                <Image src={images.bestPrice} alt='' />
              </figure>
              <h4 className='my-2'>Best Price</h4>
              <p>
                Not sure what you should be charging for your property? No need
                to worry, let us do the numbers for you.
              </p>
            </div>
            <div data-aos='fade-in' className='col-12 col-md-5'>
              <figure className='col-3'>
                <Image src={images.lowest} alt='' />
              </figure>
              <h4 className='my-2'>Lowest Commission</h4>
              <p>
                You no longer have to negotiate commissions and haggle with
                other agents it only cost 2%!
              </p>
            </div>
            <div data-aos='fade-in' className='col-12 col-md-5'>
              <figure className='col-3'>
                <Image src={images.control} alt='' />
              </figure>
              <h4 className='my-2'>Overall Control</h4>
              <p>
                Get a virtual tour, and schedule visits before you rent or buy
                any properties. You get overall control.
              </p>
            </div>
          </article>
        </section>
        <section className='container d-flex flex-column my-5 py-5'>
          <div className='text-center my-5'>
            <h3>Based on your location</h3>
            <p className='my-2'>
              Some of our picked properties near you location.
            </p>
          </div>
          <ProductTabs />
        </section>
        <MakeItEasy styles={styles} />

        <section className={styles.newsLetter}>
          <AreYourALandord styles={styles} />
        </section>
      </section>
    </main>
  );
}
