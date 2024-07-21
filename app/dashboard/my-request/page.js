import ReqActivities from '@/components/DashboardComp/MyRequest/ReqActivities';
import RequestComp from '@/components/DashboardComp/MyRequest/RequestComp';
import React from 'react';

export default function page() {
  return (
    <main className=' flex flex-wrap justify-center gap-5'>
      <section className='flex-1 '>
        <article className='container'>
          <h3 className='mb-6'>My Request</h3>
          <RequestComp />
        </article>
      </section>
      <aside className='w-full lg:w-3/12'>
        <ReqActivities />
      </aside>
    </main>
  );
}
