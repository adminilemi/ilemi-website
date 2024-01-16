import { getPropByType } from '@/Api/Apis';
import AddGifBanner from '@/components/AddGifBanner';
import FilterForm from '@/components/FilterForm/FilterForm';
import PropertyCard from '@/components/HomeComps/ProductCard/PropertyCard';
import { images } from '@/exports/images';
import React from 'react';

export default async function Rent() {
  const reqData = {
    propertyType: 'Rent',
    skip: 0,
    limit: 6,
  };
  const data = await getPropByType(reqData);

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
          <section className='d-flex flex-wrap gap-3 '>
            {data.slice(0, 9).map((item) => (
              <PropertyCard key={item._id} url='rent' property={item} />
            ))}
          </section>
        </article>
      </section>
      <AddGifBanner images={images.gif} />
    </main>
  );
}
