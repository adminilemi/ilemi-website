import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import AOSAnimation from '@/utils/AosInit';
import ReduxProvider from '@/Redux/ReduxProvider';
import NavBar from '@/components/Navbar/NavBar';

const PJS = Plus_Jakarta_Sans({ subsets: ['latin'] });

// This is for cloudflare
export const runtime = 'edge';

export const metadata = {
  title: 'Property4u',
  description:
    'A great platform to buy, sell, or even rent your properties without any commisions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={PJS.className}>
        <script
          src='//code.tidio.co/3lq6hmnhq8hcynm5vr6nkcuyessvzkvh.js'
          async
        ></script>
        <ReduxProvider>
          <NextTopLoader showSpinner={false} />

          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
