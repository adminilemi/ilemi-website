import { getPropByType } from '@/Api/Apis';
import React from 'react';
import PropertyCard from '@/components/HomeComps/ProductCard/PropertyCard';
import Link from 'next/link';

const Rent = async () => {
  const reqData = {
    propertyType: 'Rent',
    skip: 0,
    limit: 6,
  };
  const data = await getPropByType(reqData);

  return (
    <section
      className={` d-flex flex-column justify-content-between align-items-center `}
    >
      <section className='d-flex flex-wrap gap-3 my-5'>
        {data.slice(0, 6).map((item) => (
          <PropertyCard url='rent' property={item} />
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
