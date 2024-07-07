import bigCard from '@/public/assets/heroImage.png';
import Image from 'next/image';
import { images } from '@/exports/images';
import SearchTab from './SearchTab/SearchTab';

const HomeHero = ({ styles }) => {
  return (
    <main className={`${styles.homeHero} w-full`}>
      <section className=' flex flex-col lg:flex-row justify-between relative'>
        <article
          data-aos='fade-left'
          className='flex flex-col  text-center lg:text-start justify-between w-11/12 md:w-8/12 mx-auto lg:w-5/12/12 order-last lg:order-first mt-5 lg:mt-0'
        >
          <div className='flex flex-col justify-between '>
            <h1 className='my-3'>Buy, rent, or sell your property easily</h1>
            <p>
              A great platform to buy, sell, or even rent your properties
              without any commisions.
            </p>
          </div>

          <div
            className={`${styles.noSpam} flex  justify-between my-5 lg:ml-4  ml-0`}
          >
            <div>
              <figure className='w-3/12'>
                <Image src={images.rentals} alt='' />
              </figure>
              <h4 className='my-2'>50k+ renters</h4>
              <p>believe in our service</p>
            </div>
            <div>
              <figure className='w-3/12'>
                <Image src={images.propSearch} alt='' />
              </figure>
              <h4 className='my-2'>50k+ renters</h4>
              <p>believe in our service</p>
            </div>
          </div>
        </article>
        <aside data-aos='fade-right' className='w-full lg:w-6/12  mb-5 lg:mb-0'>
          <Image className='image1' src={bigCard} alt='' />
        </aside>
        <div className={styles.tabs}>
          <SearchTab />
        </div>
      </section>
    </main>
  );
};

export default HomeHero;
