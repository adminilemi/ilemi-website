'use client';

import AddGifBanner from '@/components/AddGifBanner';
import FilterForm from '@/components/FilterForm/FilterForm';
import PropertyCard from '@/components/HomeComps/ProductCard/PropertyCard';
import { images } from '@/exports/images';
import { useMyContext } from '@/utils/ContextProvider';
import { useClientFetch } from '@/utils/fetchDataOnCLient';
import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Rent() {
  const { state } = useMyContext();

  const homeSearchData = {
    ...state.search.rent,
    propertyType: 'Rent',
    skip: 0,
    limit: 6,
  };

  const reqData = state.search.rent
    ? homeSearchData
    : {
        propertyType: 'Rent',
        skip: 0,
        limit: 6,
      };

  const { data, isLoading } = useClientFetch(reqData);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main>
      <AddGifBanner images={images.gif} />
      <section className='container'>
        <hgroup className='mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center'>
          <h2 className='pageTitle'> Search properties to rent</h2>
          <div className='col-12 col-md-4'>
            <select className='form-select'>
              <option>Search with Search Bar</option>
            </select>
          </div>
        </hgroup>

        <article>
          <FilterForm />
        </article>

        <article className='my-5'>
          {state.search.rent && data.length === 0 ? (
            <div>
              <p> There's no match to your search</p>
            </div>
          ) : (
            <section className='d-flex flex-wrap gap-3 '>
              {data.map((item) => (
                <PropertyCard key={item._id} url='rent' property={item} />
              ))}
            </section>
          )}
        </article>
      </section>
      <AddGifBanner images={images.gif} />
    </main>
  );
}
