import React from 'react';
import MedicApp from '@/components/WorkComps/MedicApp';
import EmdoApp from '@/components/WorkComps/EmdoApp';
import CryptoApp from '@/components/WorkComps/CryptoApp';
import FoodApp from '@/components/WorkComps/FoodApp';
import SpraayApp from '@/components/WorkComps/SpraayApp';
import styles from '../../components/WorkComps/OurWork.module.scss';

export default function Rent() {
  return (
    <main>
      <section className='container'>
        <hgroup className='mt-5'>
          <h2> Our Works</h2>
        </hgroup>

        <section className='mt-5 '>
          <MedicApp styles={styles} />
        </section>

        <section className='mt-3 mt-lg-0'>
          <FoodApp styles={styles} />
        </section>
        <section className='mt-3 mt-lg-0'>
          <CryptoApp styles={styles} />
        </section>
        <section className='mt-3 mt-lg-0'>
          <EmdoApp styles={styles} />
        </section>

        <section className='mt-3 mt-lg-0 mb-5'>
          <SpraayApp styles={styles} />
        </section>
      </section>
    </main>
  );
}
