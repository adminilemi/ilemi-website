import AOSAnimation from '@/utils/AosInit';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer/Footer';
import { ContextProvider } from '@/utils/ContextProvider';

const PJS = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Ile-Mi',
  description:
    'A great platform to buy, sell, or even rent your properties without any commisions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={PJS.className}>
        <ContextProvider>
          <NavBar />
          <AOSAnimation>{children}</AOSAnimation>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
