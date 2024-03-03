'use client';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { pricingPlan } from '@/components/AllData';
import React, { useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import styles from './Subscription.module.scss';

export default function Pricing() {
  const { formatNumInThousands } = useGlobalHooks();
  const [plans, setPlans] = useState('Monthly');

  const handleTabs = (plan) => {
    setPlans(plan);
  };
  return (
    <main className={styles.subscription}>
      <section className='container'>
        <header
          className={`${styles.plan} text-center my-5 col-12 col-md-7 mx-auto`}
        >
          <h2>Choose the right Agent subscription for you</h2>
          <p className='my-3'>
            Choose the plan that&apos;s right for you. Whether you&apos;re just
            getting started with agency or well down the path to
            professionalization, we&apos;re got you covered
          </p>
        </header>
      </section>
      <section>
        <section className={`container ${styles.containerPlans}`}>
          <div>
            <article className='d-flex justify-content-center gap-5'>
              <div
                className={
                  plans === 'Monthly'
                    ? `${styles.tab} ${styles.activeTabs}`
                    : styles.tab
                }
                onClick={() => handleTabs('Monthly')}
              >
                Monthly
              </div>

              <div
                className={
                  plans === 'Yearly'
                    ? `${styles.tab} ${styles.activeTabs}`
                    : styles.tab
                }
                onClick={() => handleTabs('Yearly')}
              >
                Yearly
              </div>
            </article>
            <header className={`${styles.plan} text-center my-5`}>
              <h6>Select your Plan</h6>
            </header>
          </div>

          <article className={`${styles.contentTabs} my-5`}>
            <h3 className='text-center mb-5'>
              Pay for any Package and get 1 Month&apos;s Subscription Free !
            </h3>

            {plans === 'Monthly' && (
              <section id='Monthly' className=' d-flex flex-wrap gap-2'>
                {pricingPlan.Monthly.map(
                  ({ id, title, desc, benefits, price }) => (
                    <aside
                      className='d-flex flex-column justify-content-between'
                      key={id}
                    >
                      <div className={styles.planCard}>
                        <hgroup className={styles.planCardHeader}>
                          <h3>{title}</h3>
                        </hgroup>

                        <section className={styles.planCardBody}>
                          <p>{desc}</p>
                          <div className='my-3'>
                            {price === 0 ? (
                              <h3>Free</h3>
                            ) : (
                              <h3>
                                ₦{formatNumInThousands(price)}
                                <span className={styles.month}>\month</span>
                              </h3>
                            )}
                          </div>
                          {benefits.map(({ id, li }) => (
                            <ul className='' key={id}>
                              <li className='d-flex gap-2 py-2'>
                                <div>
                                  <FaCircle color='#CBD5E0' size={10} />
                                </div>
                                <span>{li}</span>
                              </li>
                            </ul>
                          ))}
                        </section>
                      </div>

                      <section
                        className={
                          title.includes('Gold')
                            ? `${styles.isSubGoldBtn} text-center`
                            : `${styles.subBtn} text-center`
                        }
                      >
                        <a href='https://agent.property4u.ng' className=' my-3'>
                          Subscribe
                        </a>
                      </section>
                    </aside>
                  ),
                )}
              </section>
            )}
            {plans === 'Yearly' && (
              <section id='Monthly' className=' d-flex flex-wrap gap-2'>
                {pricingPlan.Yearly.map(
                  ({ id, title, desc, benefits, price }) => (
                    <aside
                      className='d-flex flex-column justify-content-between'
                      key={id}
                    >
                      <div className={styles.planCard}>
                        <hgroup className={styles.planCardHeader}>
                          <h3>{title}</h3>
                        </hgroup>

                        <section className={styles.planCardBody}>
                          <p>{desc}</p>
                          <div className='my-3'>
                            {price === 0 ? (
                              <h3>Free</h3>
                            ) : (
                              <h3>
                                ₦{formatNumInThousands(price)}
                                {/* <span className='month'>\month</span> */}
                              </h3>
                            )}
                          </div>
                          {benefits.map(({ id, li }) => (
                            <ul className='' key={id}>
                              <li className='d-flex gap-2 py-2'>
                                <div>
                                  <FaCircle color='#CBD5E0' size={10} />
                                </div>
                                <span>{li}</span>
                              </li>
                            </ul>
                          ))}
                        </section>
                      </div>

                      <section
                        className={
                          title.includes('Gold')
                            ? `${styles.isSubGoldBtn} text-center`
                            : `${styles.subBtn} text-center`
                        }
                      >
                        <a href='https://agent.property4u.ng' className='my-3'>
                          Subscribe
                        </a>
                      </section>
                    </aside>
                  ),
                )}
              </section>
            )}
          </article>
        </section>
      </section>
    </main>
  );
}
