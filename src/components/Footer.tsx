import React from 'react';
// import Link from 'next/link';
import { dateUtil } from '../../lib/utils/date-util';

const Footer: React.FC<{ siteName: string }> = ({ siteName }) => {
  const { getYear } = dateUtil();

  return (
    <footer className="p-3 mt-6">
      <p className="text-sm text-center dark:text-white">
        {getYear()} {siteName}
        {/* <Link href="/about">                                                                           */}
        {/*   <a className="pl-2 font-bold text-blue dark:text-indigo-500">このサイトについて</a> */}
        {/* </Link>                                                                                        */}
      </p>
    </footer>
  );
};

export default Footer;
