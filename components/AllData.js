import { images } from '@/exports/images';
import BuySearch from './HomeComps/SearchTab/BuySearch/BuySearch';
import RentSearch from './HomeComps/SearchTab/RentSearch/RentSearch';
import SellSearch from './HomeComps/SearchTab/SellSearch/SellSearch';
import Buy from './HomeComps/Products/ProductTabComps/Buy/Buy';
import Sell from './HomeComps/Products/ProductTabComps/Sell/Sell';
import Shortlets from './HomeComps/Products/ProductTabComps/Shortlets/Shortlets';
import Rent from './HomeComps/Products/ProductTabComps/Rent/Rent';

export const searchTabData = {
  tabTitle: [
    {
      id: 'tab1',
      title: 'Rent',
    },

    {
      id: 'tab2',
      title: 'Buy',
    },

    {
      id: 'tab3',
      title: 'Sell',
    },
  ],

  tabComps: [
    { id: 'tab1', comp: <RentSearch /> },
    { id: 'tab2', comp: <BuySearch /> },
    { id: 'tab3', comp: <SellSearch /> },
  ],
};

export const nigeriaStates = [
  { name: 'Abia', capital: 'Umuahia', region: 'South East' },
  { name: 'Adamawa', capital: 'Yola', region: 'North East' },
  { name: 'Akwa Ibom', capital: 'Uyo', region: 'South South' },
  { name: 'Anambra', capital: 'Awka', region: 'South East' },
  { name: 'Bauchi', capital: 'Bauchi', region: 'North East' },
  { name: 'Bayelsa', capital: 'Yenagoa', region: 'South South' },
  { name: 'Benue', capital: 'Makurdi', region: 'North Central' },
  { name: 'Borno', capital: 'Maiduguri', region: 'North East' },
  { name: 'Cross River', capital: 'Calabar', region: 'South South' },
  { name: 'Delta', capital: 'Asaba', region: 'South South' },
  { name: 'Ebonyi', capital: 'Abakaliki', region: 'South East' },
  { name: 'Edo', capital: 'Benin City', region: 'South South' },
  { name: 'Ekiti', capital: 'Ado-Ekiti', region: 'South West' },
  { name: 'Enugu', capital: 'Enugu', region: 'South East' },
  { name: 'Gombe', capital: 'Gombe', region: 'North East' },
  { name: 'Imo', capital: 'Owerri', region: 'South East' },
  { name: 'Jigawa', capital: 'Dutse', region: 'North West' },
  { name: 'Kaduna', capital: 'Kaduna', region: 'North West' },
  { name: 'Kano', capital: 'Kano', region: 'North West' },
  { name: 'Katsina', capital: 'Katsina', region: 'North West' },
  { name: 'Kebbi', capital: 'Birnin Kebbi', region: 'North West' },
  { name: 'Kogi', capital: 'Lokoja', region: 'North Central' },
  { name: 'Kwara', capital: 'Ilorin', region: 'North Central' },
  { name: 'Lagos', capital: 'Ikeja', region: 'South West' },
  { name: 'Nasarawa', capital: 'Lafia', region: 'North Central' },
  { name: 'Niger', capital: 'Minna', region: 'North Central' },
  { name: 'Ogun', capital: 'Abeokuta', region: 'South West' },
  { name: 'Ondo', capital: 'Akure', region: 'South West' },
  { name: 'Osun', capital: 'Osogbo', region: 'South West' },
  { name: 'Oyo', capital: 'Ibadan', region: 'South West' },
  { name: 'Plateau', capital: 'Jos', region: 'North Central' },
  { name: 'Rivers', capital: 'Port Harcourt', region: 'South South' },
  { name: 'Sokoto', capital: 'Sokoto', region: 'North West' },
  { name: 'Taraba', capital: 'Jalingo', region: 'North East' },
  { name: 'Yobe', capital: 'Damaturu', region: 'North East' },
  { name: 'Zamfara', capital: 'Gusau', region: 'North West' },
];

export const makeItEasyData = [
  {
    id: 1,
    title: 'Virtual home tour',
    icon: images.vHome,
    desc: 'You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.',
  },
  {
    id: 2,
    title: 'Find the best deal',
    icon: images.bestDeal,
    desc: 'Browse thousands of properties, save your favorites and set up search alerts so you don’t miss the best home deal!',
  },
  {
    id: 3,
    title: 'Get ready to apply',
    icon: images.getReady,
    desc: 'Find your dream house? You just need to do a little to no effort and you can start move in to your new dream property!',
  },
];

export const TabsData = {
  TabTitle: [
    {
      id: '1',
      title: 'Rent',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
        >
          <path
            d='M16.4917 12.4417C14.775 14.1501 12.3167 14.6751 10.1584 14.0001L6.23337 17.9167C5.95004 18.2084 5.39171 18.3834 4.99171 18.3251L3.17504 18.0751C2.57504 17.9917 2.01671 17.4251 1.92504 16.8251L1.67504 15.0084C1.61671 14.6084 1.80837 14.0501 2.08337 13.7667L6.00004 9.85006C5.33337 7.68339 5.85004 5.22506 7.56671 3.51672C10.025 1.05839 14.0167 1.05839 16.4834 3.51672C18.95 5.97506 18.95 9.98339 16.4917 12.4417Z'
            stroke='#5F259F'
            strokeWidth='2'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M5.7417 14.575L7.65837 16.4916'
            stroke='#5F259F'
            strokeWidth='2'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12.0834 9.16663C12.7737 9.16663 13.3334 8.60698 13.3334 7.91663C13.3334 7.22627 12.7737 6.66663 12.0834 6.66663C11.393 6.66663 10.8334 7.22627 10.8334 7.91663C10.8334 8.60698 11.393 9.16663 12.0834 9.16663Z'
            stroke='#5F259F'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      id: '2',
      title: 'Buy',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
        >
          <path
            d='M14.1666 17.0833H5.83329C3.33329 17.0833 1.66663 15.8333 1.66663 12.9166V7.08329C1.66663 4.16663 3.33329 2.91663 5.83329 2.91663H14.1666C16.6666 2.91663 18.3333 4.16663 18.3333 7.08329V12.9166C18.3333 15.8333 16.6666 17.0833 14.1666 17.0833Z'
            stroke='#100A55'
            strokeWidth='2'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z'
            stroke='#100A55'
            strokeWidth='2'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M4.58337 7.91663V12.0833'
            stroke='#100A55'
            strokeWidth='2'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.4166 7.91663V12.0833'
            stroke='#100A55'
            strokeWidth='2'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      id: '3',
      title: 'Sell',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
        >
          <g clipPath='url(#clip0_796_10687)'>
            <path
              d='M17.2604 6.56836L11.7052 2.25151C11.2177 1.87259 10.6176 1.66687 9.99996 1.66687C9.3823 1.66687 8.78226 1.87259 8.29475 2.25151L2.7385 6.56836C2.40459 6.82779 2.13443 7.16002 1.94866 7.5397C1.76289 7.91937 1.66643 8.33643 1.66663 8.75904V16.2521C1.66663 16.8041 1.88612 17.3336 2.27682 17.7239C2.66752 18.1142 3.19743 18.3335 3.74996 18.3335H16.25C16.8025 18.3335 17.3324 18.1142 17.7231 17.7239C18.1138 17.3336 18.3333 16.8041 18.3333 16.2521V8.75904C18.3333 7.90254 17.9375 7.09391 17.2604 6.56836Z'
              stroke='#100A55'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_796_10687'>
              <rect width='20' height='20' fill='white' />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: '4',
      title: 'Shortlets',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
        >
          <g clipPath='url(#clip0_796_10687)'>
            <path
              d='M17.2604 6.56836L11.7052 2.25151C11.2177 1.87259 10.6176 1.66687 9.99996 1.66687C9.3823 1.66687 8.78226 1.87259 8.29475 2.25151L2.7385 6.56836C2.40459 6.82779 2.13443 7.16002 1.94866 7.5397C1.76289 7.91937 1.66643 8.33643 1.66663 8.75904V16.2521C1.66663 16.8041 1.88612 17.3336 2.27682 17.7239C2.66752 18.1142 3.19743 18.3335 3.74996 18.3335H16.25C16.8025 18.3335 17.3324 18.1142 17.7231 17.7239C18.1138 17.3336 18.3333 16.8041 18.3333 16.2521V8.75904C18.3333 7.90254 17.9375 7.09391 17.2604 6.56836Z'
              stroke='#100A55'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_796_10687'>
              <rect width='20' height='20' fill='white' />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ],

  TabContents: [
    { id: '1', comps: <Rent /> },
    { id: '2', comps: <Buy /> },
    { id: '3', comps: <Sell /> },
    { id: '4', comps: <Shortlets /> },
  ],
};

export const propertyType = [
  // {
  //   id: 1,
  //   title: 'Select type',
  // },
  {
    id: 2,
    title: 'Rent',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
      >
        <path
          d='M1.66699 18.3333H18.3337'
          stroke='#5F259F'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2.45801 18.3333L2.49968 8.30832C2.49968 7.79998 2.74134 7.3167 3.14134 7.00003L8.97467 2.45835C9.57467 1.99169 10.4163 1.99169 11.0247 2.45835L16.858 6.99169C17.2663 7.30835 17.4997 7.79165 17.4997 8.30832V18.3333'
          stroke='#5F259F'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinejoin='round'
        />
        <path
          d='M12.9163 9.16667H7.08301C6.39134 9.16667 5.83301 9.72501 5.83301 10.4167V18.3333H14.1663V10.4167C14.1663 9.72501 13.608 9.16667 12.9163 9.16667Z'
          stroke='#5F259F'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.33301 13.5417V14.7917'
          stroke='#5F259F'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Sell',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='22'
        height='20'
        viewBox='0 0 22 20'
        fill='none'
      >
        <path
          d='M1.83301 18.3333H20.1663'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M17.4834 18.3417V14.625'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M17.5003 9.07501C16.4837 9.07501 15.667 9.89169 15.667 10.9084V12.8C15.667 13.8167 16.4837 14.6333 17.5003 14.6333C18.517 14.6333 19.3337 13.8167 19.3337 12.8V10.9084C19.3337 9.89169 18.517 9.07501 17.5003 9.07501Z'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2.75 18.3333V5.02503C2.75 3.35003 3.58338 2.50835 5.24171 2.50835H10.4334C12.0917 2.50835 12.9167 3.35003 12.9167 5.02503V18.3333'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.83301 6.875H9.95802'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.83301 10H9.95802'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.875 18.3333V15.2083'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Buy',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
      >
        <path
          d='M10.8337 18.3333H4.16699C2.50033 18.3333 1.66699 17.5 1.66699 15.8333V9.16667C1.66699 7.50001 2.50033 6.66667 4.16699 6.66667H8.33366V15.8333C8.33366 17.5 9.16699 18.3333 10.8337 18.3333Z'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.42531 3.33333C8.35865 3.58333 8.33366 3.85833 8.33366 4.16666V6.66666H4.16699V4.99999C4.16699 4.08333 4.91699 3.33333 5.83366 3.33333H8.42531Z'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.667 6.66667V10.8333'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15 6.66667V10.8333'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14.167 14.1667H12.5003C12.042 14.1667 11.667 14.5417 11.667 15V18.3333H15.0003V15C15.0003 14.5417 14.6253 14.1667 14.167 14.1667Z'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.33301 15.8333V4.16667C8.33301 2.50001 9.16634 1.66667 10.833 1.66667H15.833C17.4997 1.66667 18.333 2.50001 18.333 4.16667V15.8333C18.333 17.5 17.4997 18.3333 15.833 18.3333H10.833C9.16634 18.3333 8.33301 17.5 8.33301 15.8333Z'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Shortlets',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
      >
        <path
          d='M5.58367 15H3.45868C2.26701 15 1.66699 14.4 1.66699 13.2083V3.45834C1.66699 2.26668 2.26701 1.66666 3.45868 1.66666H7.042C8.23367 1.66666 8.83364 2.26668 8.83364 3.45834V4.99999'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M14.4747 7.01665V16.3167C14.4747 17.6583 13.808 18.3333 12.4663 18.3333H7.59966C6.25799 18.3333 5.58301 17.6583 5.58301 16.3167V7.01665C5.58301 5.67499 6.25799 5 7.59966 5H12.4663C13.808 5 14.4747 5.67499 14.4747 7.01665Z'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.167 4.99999V3.45834C11.167 2.26668 11.767 1.66666 12.9586 1.66666H16.542C17.7336 1.66666 18.3336 2.26668 18.3336 3.45834V13.2083C18.3336 14.4 17.7336 15 16.542 15H14.4753'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.33301 9.16666H11.6663'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.33301 11.6667H11.6663'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10 18.3333V15.8333'
          stroke='#000929'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
];
