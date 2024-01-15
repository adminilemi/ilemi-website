// 'use client';
import React from 'react';
import styles from './ProductTab.module.scss';
import { TabsData } from '@/components/AllData';
import RenderClientTabs from './RenderClientTabs';

const ProductTabs = () => {
  return (
    <main className={styles.tabsContainer}>
      <RenderClientTabs TabsData={TabsData} styles={styles} />
    </main>
  );
};

export default ProductTabs;
