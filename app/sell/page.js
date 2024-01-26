'use client';

import React, { useEffect, useState } from 'react';
import styles from './About.module.scss';
import AddGifBanner from '@/components/AddGifBanner';
import { images } from '@/exports/images';
import FilterForm from '@/components/FilterForm/FilterForm';
import PropertyCard from '@/components/HomeComps/ProductCard/PropertyCard';
import { Spinner } from 'react-bootstrap';
import { useClientFetch } from '@/utils/fetchDataOnCLient';
import { useMyContext } from '@/utils/ContextProvider';

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
    return <Spinner />;
  }

  return (
    <main className={styles.about}>
      <AddGifBanner images={images.gif} />
      <section className='container'>
        <hgroup className='mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center'>
          <h2 className='pageTitle'> Search properties for sell</h2>
          <div className='col-12 col-md-4'>
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
            <section className='d-flex flex-wrap gap-3 '>
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
