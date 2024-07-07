'use client';

import React, { useState } from 'react';
import { searchTabData } from '@/components/AllData';
import styles from './SearhTab.module.scss';
import TabContents from '@/components/Tabs/TabContents';
import TabTitle from '@/components/Tabs/TabTitle';

const SearchTab = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <main className={`${styles.searchTab} flex flex-col w-11/12 mx-auto`}>
      <section
        className={`${styles.tabTitleContainer} flex gap-2 w-11/12 md:w-7/12/12 `}
      >
        {searchTabData.tabTitle.map(({ id, title }) => (
          <div key={id} className={`${styles.tabTitle}`}>
            <TabTitle
              title={title}
              id={id}
              activeClass={styles.activeClass}
              notActiveClass={styles.notActiveClass}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        ))}
      </section>

      <section>
        {searchTabData.tabComps.map(({ id, comp }) => (
          <div key={id} className={`${styles.tabTitle}`}>
            <TabContents id={id} activeTab={activeTab} comps={comp} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default SearchTab;
