import { getPropByType } from '@/Api/Apis';
import PropertyCard from '@/components/HomeComps/ProductCard/PropertyCard';
import Link from 'next/link';
import React from 'react';

const Buy = async () => {
  const reqData = {
    Property_Category: 'Buy',
    skip: 0,
    limit: 6,
  };

  const data = await getPropByType(reqData);

  return (
    <section
      className={` d-flex flex-column justify-content-between align-items-center `}
    >
      <section className='d-flex flex-wrap gap-3 justify-content-between my-5 col-12'>
        {data.map((item) => (
          <PropertyCard key={item._id} url='buy' property={item} />
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
