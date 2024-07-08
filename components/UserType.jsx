import React from 'react';
import Link from 'next/link';

const UserType = ({ tenantsUrl, agentsUrl, agentsTitle, tenantsTitle }) => {
  // const [toggle, setToggle] = useState({});

  // const handleToggle = (id) => {
  //   setToggle((prev) => ({ [id]: !prev[id] }));
  // };

  return (
    <article className='my-5'>
      <div className='flex cursor-pointer'>
        <a href={agentsUrl} className='main-btn w-full text-center'>
          {agentsTitle}
        </a>
      </div>

      <div className='flex cursor-pointer mt-8'>
        <Link
          href={tenantsUrl}
          className='outline-btn w-full text-center text-mainColor'
        >
          {tenantsTitle}
        </Link>
      </div>
    </article>
  );
};

export default UserType;

// return (
//   <section>
//     <article className='catSides'>
//       <button
//         className={toggle['b'] ? 'userTypeActive catSide' : 'catSide'}
//         onClick={() => handleToggle('b')}
//       >
//         <div className='text-start'>
//           <h6>BUYER</h6>
//           <p>
//             I am just here to connect withe Local Vendors and also buy some
//             stuffs i need
//           </p>
//         </div>
//       </button>
//       <button
//         className={toggle['v'] ? 'userTypeActive catSide' : 'catSide'}
//         onClick={() => handleToggle('v')}
//       >
//         <div className='text-start'>
//           <h6>VENDOR / SELLER</h6>
//           <p>
//             I want to market and sell my products here so i can reach a wider
//             and also local audience.
//           </p>
//         </div>
//       </button>
//     </article>

//     <article className='my-5'>
//       {toggle?.b ? (
//         <div className='flex cursor-pointer'>
//           <Link href={agentsUrl} className='main-btn w-full text-center'>
//             Register As Property Manager
//           </Link>
//         </div>
//       ) : (
//         toggle?.v && (
//           <div className='flex cursor-pointer'>
//             <a href={tenantsUrl} className='main-btn w-full text-center'>
//               {' '}
//               Register As A Tenants
//             </a>
//           </div>
//         )
//       )}
//     </article>
//   </section>
// );
