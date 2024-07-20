import React from 'react';
import './MovingText.scss';
import Image from 'next/image';
import realestateLogo from '@/public/assets/1.png';

export const MovingItems = () => {
  return (
    <section className='movingText my-6'>
      <article className='movingTextContainer '>
        <ul className='movingTextWrapper'>
          {Array.from({ length: 12 }).map((_, idx) => (
            <li key={idx} className='w-20 lg:w-96'>
              <Image src={realestateLogo} alt='' className='' />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
