import {
  DashboardIcon,
  HeartIcon,
  MessagingIcon,
  MyReqIcon,
  Settings,
} from '@/SVGs/SVGFiles';

export const SidebarData = {
  Employer: [
    {
      id: 'tab1',
      icon: <DashboardIcon />,
      title: 'Dashboard',
      url: '/dashboard',
    },

    {
      id: 'tab2',
      icon: <MyReqIcon />,
      title: 'My Request',
      url: '/dashboard/my-request',
    },
    {
      id: 'tab3',
      icon: <HeartIcon />,
      title: 'My Favourite',
      url: '/dashboard/my-favourite',
    },

    {
      id: 'tab5',
      icon: <MessagingIcon />,
      title: 'Messages',
      url: '/dashboard/messaging',
    },
  ],

  Account: [
    {
      id: 'tab7',
      icon: <Settings />,
      title: 'Settings',
      url: '/dashboard/settings',
    },
  ],
};
