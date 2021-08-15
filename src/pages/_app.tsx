import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-10/12 mx-auto lg:w-7/12">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
