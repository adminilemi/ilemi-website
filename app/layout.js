import AOSAnimation from '@/utils/AosInit';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer/Footer';
import { ContextProvider } from '@/utils/ContextProvider';

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
        <ContextProvider>
          <NavBar />
          <AOSAnimation>{children}</AOSAnimation>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
