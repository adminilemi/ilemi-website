import React from 'react';
import EmptyState from '../EmptyState/EmptyState';

const RecentlyViewed = () => {
  return (
    <section className=' bg-white card mt-6'>
      <div className='mb-5 p-4'>
        <h4>Properties</h4>
        <p className='text-xs mt-2'>
          From the most recent properties you viewed.
        </p>
      </div>
      <hr />
      <section className='p-4'>
        <EmptyState
          title='No recent view products, yet'
          subTitle='Your recently viewed products will appear here when you have them'
        />
      </section>
    </section>
  );
};

export default RecentlyViewed;
