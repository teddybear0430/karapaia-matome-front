import React from 'react';
import Link from 'next/link';

const Header: React.FC<{ siteName: string }> = ({ siteName }) => {
  const todayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    return `${year}年${month}月${date}日`.toString();
  };

  return (
    <header className="flex items-center justify-between py-3 font-bold">
      <h1>
        <Link href="/">
          <a className="text-2xl text-blue">{ siteName }</a>
        </Link>
      </h1>
      <span className="text-gray">{todayDate()}</span>
    </header>
  );
};

export default Header;
