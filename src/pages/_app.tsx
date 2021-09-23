import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../../style/global.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollIcon from '../components/ScrollIcon';
import { siteConfig } from '../../config/config';
import createStore from '../../lib/store';

function MyApp({ Component, pageProps }: AppProps) {
  const { siteName } = siteConfig;

  return (
    <ThemeProvider attribute="class">
      <Provider store={createStore()}>
        <div className="flex flex-col w-11/12 h-screen mx-auto lg:w-7/12">
          <Header siteName={siteName} />
          <Component {...pageProps} />
          <Footer siteName={siteName} />
          <ScrollIcon />
        </div>
      </Provider>
    </ThemeProvider>
  );
}
export default MyApp;
