import { getPropByType } from '@/Api/Apis';
import PropertyCard from '@/components/HomeComps/ProductCard/PropertyCard';
import Link from 'next/link';
import React from 'react';

const Buy = async () => {
  const reqData = {
    propertyType: 'Buy',
    skip: 0,
    limit: 6,
  };

  const data = await getPropByType(reqData);

  return (
    <section
      className={` d-flex flex-column justify-content-between align-items-center `}
    >
      <section className='d-flex flex-wrap gap-3 my-5'>
        {data.slice(0, 6).map((item, idx) => (
          <PropertyCard key={item._id} property={item} />
        ))}
      </section>

      <div className='my-3'>
        <Link href='buy' className='main-btn'>
          {' '}
          Browse more properties
        </Link>
      </div>
    </section>
  );
};
export default Buy;
