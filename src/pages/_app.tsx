import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-9/12 mx-auto">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
