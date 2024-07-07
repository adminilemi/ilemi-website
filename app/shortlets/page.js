'use client';
import React, { useEffect, useState } from 'react';
import styles from './Services.module.scss';
import AddGifBanner from '@/components/AddGifBanner';
import { images } from '@/exports/images';
import FilterForm from '@/components/FilterForm/FilterForm';
import PropertyCard from '@/components/HomeComps/ProductCard/PropertyCard';
import { useClientFetch } from '@/utils/fetchDataOnCLient';
import { Spinner } from 'react-bootstrap';

export default function Shortlets() {
  const [pageFilterData, setPageFilterData] = useState({
    Property_Category: 'Shortlets',
    skip: 0,
    limit: 6,
  });

  const { data, isLoading, refetch } = useClientFetch(pageFilterData);

  useEffect(() => {
    refetch();
  }, [pageFilterData, refetch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className={styles.services}>
      <AddGifBanner images={images.gif} />
      <section className='container'>
        <hgroup className='mt-5 flex flex-col md:flex-row justify-between items-center'>
          <h2 className='pageTitle'> Search properties for shortlets</h2>
          <div className='w-11/12 md:w-4'>
            <select className='form-select'>
              <option>Search with Search Bar</option>
            </select>
          </div>
        </hgroup>

        <article>
          <FilterForm setPageFilterData={setPageFilterData} />
        </article>

        <article className='my-5'>
          {data.length === 0 ? (
            <div>
              <p> There&apos;s no match to your search</p>
            </div>
          ) : (
            <section className='flex flex-wrap gap-3 '>
              {data.slice(0, 9).map((item) => (
                <PropertyCard key={item._id} url='shortlets' property={item} />
              ))}
            </section>
          )}
        </article>
      </section>
      <AddGifBanner images={images.gif} />
    </main>
  );
}
