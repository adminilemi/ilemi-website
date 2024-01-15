'use client';
import React, { useState } from 'react';
import Search from '@/components/Search';
import TabContents from '@/components/Tabs/TabContents';
import TabTitle from '@/components/Tabs/TabTitle';

const RenderClientTabs = ({ TabsData, styles }) => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <div>
      <section className='d-flex flex-column flex-md-row justify-content-between'>
        <article
          className={`${styles.tabTitleContainer} d-flex flex-wrap justify-content-between col-12 col-md-6 align-items-center`}
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

        <article className='my-3 my-lg-0'>
          <Search placeholder='Search' />
        </article>
      </section>
      <section className='tabContents d-flex flex-column'>
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
