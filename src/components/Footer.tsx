import React from 'react';
import Link from 'next/link';
import { dateUtil } from '../../lib/utils/date-util';

const Footer: React.FC<{ siteName: string }> = ({ siteName }) => {
  const { getYear } = dateUtil();

  return (
    <footer className="px-3 pt-3 pb-8 mt-auto">
      <p className="text-sm text-center dark:text-darkmodeWhite">
        {getYear()} {siteName}
        <Link href="/about">
          <a className="pl-2 font-bold hover:underline text-blue dark:text-darkmodeBlue">このサイトについて</a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
