import React from 'react';
import Link from 'next/link';
import ToggleThemeMode from './ToggleThemeMode';

const Header: React.FC<{ siteName: string }> = ({ siteName }) => {
  return (
    <header className="flex items-center justify-between py-3 font-bold">
      <h1>
        <Link href="/">
          <a className="text-2xl text-blue dark:text-darkmodeBlue">{siteName}</a>
        </Link>
      </h1>
      <ToggleThemeMode />
    </header>
  );
};

export default Header;
