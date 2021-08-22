import React from 'react';
import Link from 'next/link';
import { dateUtil } from '../../utils/date-util';

const Header: React.FC<{ siteName: string }> = ({ siteName }) => {
  const { todayDate } = dateUtil();

  return (
    <header className="flex items-center justify-between py-3 font-bold">
      <h1>
        <Link href="/">
          <a className="text-2xl text-blue">{siteName}</a>
        </Link>
      </h1>
      <span className="text-gray">{todayDate()}</span>
    </header>
  );
};

export default Header;
