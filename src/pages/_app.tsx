import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Header from '../components/Header'
import Footer from '../components/Footer';
import { siteConfig } from '../config/config'

function MyApp({ Component, pageProps }: AppProps) {
  const { siteName } = siteConfig;

  return (
    <div className="w-10/12 mx-auto lg:w-7/12">
      <Header siteName={siteName} />
      <Component {...pageProps} />
      <Footer siteName={siteName} />
    </div>
  );
}
export default MyApp;
