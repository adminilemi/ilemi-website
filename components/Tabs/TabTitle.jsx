'use client';

import React from 'react';

function TabTitle({
  id,
  title,
  activeTab,
  setActiveTab,
  icon,
  activeClass,
  notActiveClass,
}) {
  const handTabSwitch = () => {
    setActiveTab(id);
  };

  return (
    <main
      onClick={handTabSwitch}
      className={activeTab === id ? activeClass : notActiveClass}
    >
      <ul className=' tabTitle'>
        <li id={id} className='d-flex flex-row align-items-center '>
          {icon && <h4 className='me-2 '>{icon}</h4>}
          <h4>{title}</h4>
        </li>
      </ul>
    </main>
  );
}

export default TabTitle;
