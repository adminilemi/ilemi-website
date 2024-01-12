import { images } from '@/exports/images';
import BuySearch from './HomeComps/SearchTab/BuySearch/BuySearch';
import RentSearch from './HomeComps/SearchTab/RentSearch/RentSearch';
import SellSearch from './HomeComps/SearchTab/SellSearch/SellSearch';

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
