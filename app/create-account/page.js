import React from 'react';
import './category.css';
import BrandLogo from '@/components/BrandLogo';
import UserType from '@/components/UserType';
import RightSide from '@/components/AuthComp/RightSide';

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
              <h3 className='text-bold mb-2'>Welcome</h3>
              <h5>
                Thank you for choosing to join us. Please complete your
                registration below to get started. We're excited to have you on
                board!.
              </h5>
            </hgroup>

            <UserType
              tenantsTitle='Register As A Tenants'
              agentsTitle='Register As Property Manager'
              agentsUrl='https://agent.property4u.ng/signin'
              tenantsUrl='/auth/signup'
            />
          </section>
        </aside>{' '}
      </section>
      <RightSide />
    </main>
  );
}
