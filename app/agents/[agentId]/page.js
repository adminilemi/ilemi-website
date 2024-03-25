import React from 'react';
import { getAgentById, getPropertiesByAgentId } from '@/Api/Apis';
import PropertyCard from '@/components/HomeComps/ProductCard/PropertyCard';
import AddGifBanner from '@/components/AddGifBanner';
import { images } from '@/exports/images';

export default async function page({ params }) {
  const data = await getPropertiesByAgentId(params.agentId);

  const agentData = await getAgentById(params?.agentId);

  const { CompanyName } = agentData?.data;

  return (
    <main>
      <AddGifBanner images={images.gif} />
      <section className='container'>
        <section className={` my-4 text-center`}>
          <small>Listed properties by: </small>

          <div className='d-flex flex-column justify-content-between my-3 col-12 text-center'>
            <h5>{CompanyName}</h5>
          </div>
        </section>

        <article className='my-5'>
          {data.length === 0 ? (
            <div>
              <p> No product from this agent yet</p>
            </div>
          ) : (
            <section className='d-flex flex-wrap gap-3 '>
              {data?.map((item) => (
                <PropertyCard key={item._id} url='agentId' property={item} />
              ))}
            </section>
          )}
        </article>
      </section>
      <AddGifBanner images={images.gif} />
    </main>
  );
}
