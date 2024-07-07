import HeroPageReUseable from '@/components/ForContactus/HeroPageReUseable';
import styles from './SubscribeForm.module.scss';
import succ from '@/public/assets/success.gif';
import Link from 'next/link';
import Image from 'next/image';

function Success() {
  return (
    <main className={styles.subPage}>
      <HeroPageReUseable text='Subscribe Form' />

      <section
        className={`container ${styles.pageContent}  mt-5 flex flex-col`}
      >
        <figure className='w-11/12 md:w-4 mx-auto'>
          <Image src={succ} alt='' />
        </figure>
        <p
          className={`w-11/12 md:w-7/12 mx-auto text-center my-5 ${styles.success} `}
        >
          Thank you for registering! Expect regular updates on our products. We
          appreciate your connection and look forward to staying in touch.
        </p>

        <div className='text-center my-4'>
          <Link className='main-btn' to='/'>
            {' '}
            Close{' '}
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Success;
