import { getPropByType } from '@/Api/Apis';
import React from 'react';
import PropertyCard from '@/components/HomeComps/ProductCard/PropertyCard';
import Link from 'next/link';

const Rent = async () => {
  const reqData = {
    Property_Category: 'Rent',
    skip: 0,
    limit: 6,
  };
  const data = await getPropByType(reqData);

  console.log(data);

  return (
    <section className={` flex flex-col justify-between items-center `}>
      <section className='flex flex-wrap gap-3 justify-between my-5 w-11/12'>
        {data.map((item) => (
          <PropertyCard key={item._id} url='rent' property={item} />
        ))}
      </section>

      <div className='my-3'>
        <Link href='rent' className='main-btn'>
          {' '}
          Browse more properties
        </Link>
      </div>
    </section>
  );
};

export default Rent;
