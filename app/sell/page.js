'use client';

import React, { useEffect, useState } from 'react';
import styles from './About.module.scss';
import AddGifBanner from '@/components/AddGifBanner';
import { images } from '@/exports/images';
import FilterForm from '@/components/FilterForm/FilterForm';
import PropertyCard from '@/components/HomeComps/ProductCard/PropertyCard';
import { useClientFetch } from '@/utils/fetchDataOnCLient';
import { useMyContext } from '@/utils/ContextProvider';
import PageSkeleton from '@/components/PageSkeleton';

export default function Sell() {
  const { state } = useMyContext();

  const homeSearchData = {
    ...state.search.sell,
    Property_Category: 'Sell',
    skip: 0,
    limit: 6,
  };

  const [pageFilterData, setPageFilterData] = useState(
    state.search.sell
      ? homeSearchData
      : {
          Property_Category: 'Sell',
          skip: 0,
          limit: 6,
        },
  );

  const reqData = pageFilterData;
  const { data, isLoading, refetch } = useClientFetch(reqData);

  useEffect(() => {
    refetch();
  }, [reqData, refetch]);

  if (isLoading) {
    return <PageSkeleton />;
  }

  return (
    <main className={styles.about}>
      <AddGifBanner images={images.gif} />
      <section className='container'>
        <hgroup className='mt-5 flex flex-col md:flex-row justify-between items-center'>
          <h2 className='pageTitle flex-1'> Search properties for sell</h2>
          <div className='w-11/12 md:w-4/12'>
            <select className='w-full'>
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
              {data.map((item) => (
                <PropertyCard key={item._id} url='sell' property={item} />
              ))}
            </section>
          )}
        </article>
      </section>
      <AddGifBanner images={images.gif} />
    </main>
  );
}
