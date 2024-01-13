import { images } from '@/exports/images';
import BuySearch from './HomeComps/SearchTab/BuySearch/BuySearch';
import RentSearch from './HomeComps/SearchTab/RentSearch/RentSearch';
import SellSearch from './HomeComps/SearchTab/SellSearch/SellSearch';
import Rent from './HomeComps/Products/ProductTabComps/Rent/Rent';
import Buy from './HomeComps/Products/ProductTabComps/Buy/Buy';
import Sell from './HomeComps/Products/ProductTabComps/Sell/Sell';
import Shortlets from './HomeComps/Products/ProductTabComps/Shortlets/Shortlets';

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
            stroke-width='2'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M5.7417 14.575L7.65837 16.4916'
            stroke='#5F259F'
            stroke-width='2'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M12.0834 9.16663C12.7737 9.16663 13.3334 8.60698 13.3334 7.91663C13.3334 7.22627 12.7737 6.66663 12.0834 6.66663C11.393 6.66663 10.8334 7.22627 10.8334 7.91663C10.8334 8.60698 11.393 9.16663 12.0834 9.16663Z'
            stroke='#5F259F'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
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
            stroke-width='2'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z'
            stroke='#100A55'
            stroke-width='2'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M4.58337 7.91663V12.0833'
            stroke='#100A55'
            stroke-width='2'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M15.4166 7.91663V12.0833'
            stroke='#100A55'
            stroke-width='2'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
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
          <g clip-path='url(#clip0_796_10687)'>
            <path
              d='M17.2604 6.56836L11.7052 2.25151C11.2177 1.87259 10.6176 1.66687 9.99996 1.66687C9.3823 1.66687 8.78226 1.87259 8.29475 2.25151L2.7385 6.56836C2.40459 6.82779 2.13443 7.16002 1.94866 7.5397C1.76289 7.91937 1.66643 8.33643 1.66663 8.75904V16.2521C1.66663 16.8041 1.88612 17.3336 2.27682 17.7239C2.66752 18.1142 3.19743 18.3335 3.74996 18.3335H16.25C16.8025 18.3335 17.3324 18.1142 17.7231 17.7239C18.1138 17.3336 18.3333 16.8041 18.3333 16.2521V8.75904C18.3333 7.90254 17.9375 7.09391 17.2604 6.56836Z'
              stroke='#100A55'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
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
          <g clip-path='url(#clip0_796_10687)'>
            <path
              d='M17.2604 6.56836L11.7052 2.25151C11.2177 1.87259 10.6176 1.66687 9.99996 1.66687C9.3823 1.66687 8.78226 1.87259 8.29475 2.25151L2.7385 6.56836C2.40459 6.82779 2.13443 7.16002 1.94866 7.5397C1.76289 7.91937 1.66643 8.33643 1.66663 8.75904V16.2521C1.66663 16.8041 1.88612 17.3336 2.27682 17.7239C2.66752 18.1142 3.19743 18.3335 3.74996 18.3335H16.25C16.8025 18.3335 17.3324 18.1142 17.7231 17.7239C18.1138 17.3336 18.3333 16.8041 18.3333 16.2521V8.75904C18.3333 7.90254 17.9375 7.09391 17.2604 6.56836Z'
              stroke='#100A55'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
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
