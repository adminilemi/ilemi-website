import Link from 'next/link';
import bigCard from '@/public/assets/heroImage.png';
import Image from 'next/image';
import { images } from '@/exports/images';
import SearchTab from './SearchTab/SearchTab';

function HomeHero({ styles }) {
  return (
    <main className={`${styles.homeHero} col-12`}>
      <section className=' d-flex flex-column flex-lg-row justify-content-between position-relative'>
        <article
          data-aos='fade-left'
          className='d-flex flex-column  text-center text-lg-start justify-content-between col-12 col-md-8 mx-auto col-lg-5 order-1 order-lg-0 mt-5 mt-lg-0'
        >
          <div className='d-flex flex-column justify-content-between ms-lg-4 ms-0'>
            <h1 className='my-3'>Buy, rent, or sell your property easily</h1>
            <p>
              A great platform to buy, sell, or even rent your properties
              without any commisions.
            </p>
          </div>

          <div
            className={`${styles.noSpam} d-flex  justify-content-between my-5 ms-lg-4  ms-0`}
          >
            <div>
              <figure className='col-3'>
                <Image src={images.rentals} alt='' />
              </figure>
              <h4 className='my-2'>50k+ renters</h4>
              <p>believe in our service</p>
            </div>
            <div>
              <figure className='col-3'>
                <Image src={images.propSearch} alt='' />
              </figure>
              <h4 className='my-2'>50k+ renters</h4>
              <p>believe in our service</p>
            </div>
          </div>
        </article>
        <aside
          data-aos='fade-right'
          className='col-12 col-lg-6 order-0 order-lg-1 mb-5 mb-lg-0'
        >
          <Image className='image1' src={bigCard} alt='' />
        </aside>
        <div className={styles.tabs}>
          <SearchTab />
        </div>
      </section>
    </main>
  );
}

export default HomeHero;
