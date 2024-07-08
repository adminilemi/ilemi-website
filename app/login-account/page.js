import React from 'react';
import '../create-account/category.css';
import UserType from '@/components/UserType';
import RightSide from '@/components/AuthComp/RightSide';
import BrandLogo from '@/components/BrandLogo';

export default function page() {
  return (
    <main className='categories bg-white min-h-screen flex justify-between'>
      <section className='w-11/12 lg:w-[55%] flex flex-col aside'>
        <header className='border-bottom py-2 mb-3 bg-mainColor'>
          <div className='container'>
            <BrandLogo className='w-[10%]' />
          </div>
        </header>
        <aside className='container mx-auto flex flex-col justify-center '>
          <section className='w-full md:w-8/12'>
            <hgroup className='mt-6 mb-9 text-center lg:text-start'>
              <h3 className='text-bold mb-2'>Welcome Back</h3>
              <h5>Please choose how you will like to signin.</h5>
            </hgroup>

            <UserType
              tenantsTitle='Login As A Tenants'
              agentsTitle='Login As Property Manager'
              agentsUrl='https://agent.property4u.ng/signin'
              tenantsUrl='/auth/signin'
            />
          </section>
        </aside>{' '}
      </section>
      <RightSide />
    </main>
  );
}
