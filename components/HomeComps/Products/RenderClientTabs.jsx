'use client';
import React, { useState } from 'react';
import Search from '@/components/Search';
import TabContents from '@/components/Tabs/TabContents';
import TabTitle from '@/components/Tabs/TabTitle';

const RenderClientTabs = ({ TabsData, styles }) => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <div>
      <section className='flex flex-col md:flex-row items-center justify-between'>
        <article
          className={`${styles.tabTitleContainer} flex flex-wrap justify-between w-11/12 md:w-6/12 items-center`}
        >
          {TabsData.TabTitle.map(({ id, title, icon }) => (
            <div key={id}>
              <TabTitle
                id={id}
                title={title}
                icon={icon}
                activeClass={styles.tabActive}
                notActiveClass={styles.tabNotActive}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          ))}
        </article>

        <article className='my-3 lg:my-0'>
          <Search placeholder='Search' />
        </article>
      </section>
      <section className='tabContents flex flex-col'>
        {TabsData.TabContents.map(({ id, comps }) => (
          <section key={id} className='tabContents'>
            <TabContents id={id} activeTab={activeTab} comps={comps} />
          </section>
        ))}
      </section>
    </div>
  );
};

export default RenderClientTabs;
