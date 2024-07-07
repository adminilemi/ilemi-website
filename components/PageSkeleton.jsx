import React from 'react';
import Skeleton from 'react-loading-skeleton';

const PageSkeleton = () => {
  return (
    <main className='container flex flex-col gap-5 my-5'>
      <Skeleton containerClassName='flex-1' height={150} />

      <section className='flex  justify-between '>
        <Skeleton containerClassName='w-[70%]' />
        <Skeleton containerClassName='w-[20%]' />
      </section>
      <section className='flex flex-col justify-between mt-10'>
        <Skeleton containerClassName='flex-1' />

        <ul className='flex flex-wrap gap-y-4 justify-between'>
          {Array.from({ length: 6 }).map((_, idx) => (
            <li key={idx} className='w-[32%] h-200px'>
              <Skeleton containerClassName='flex-1' height={100} />

              <section className='bg-white p-3'>
                <section className='flex justify-between mt-2'>
                  <Skeleton containerClassName='w-[70%]' />
                  <Skeleton containerClassName='w-[25%]' />
                </section>
                <Skeleton count={4} />
                <hr />
                <section className='flex  justify-between mt-2'>
                  <Skeleton containerClassName='w-[32%]' />
                  <Skeleton containerClassName='w-[32%]' />
                  <Skeleton containerClassName='w-[32%]' />
                </section>
              </section>
            </li>
          ))}
        </ul>
      </section>
      <Skeleton containerClassName='flex-1' height={150} />
    </main>
  );
};

export default PageSkeleton;
