import React from 'react';
import Link from 'next/link';
import ToggleThemeMode from './ToggleThemeMode';

type Props = {
  siteName: string;
};

const Header: React.FC<Props> = ({ siteName }) => {
  return (
    <header className="flex items-center justify-between mt-3 font-bold mb-9">
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
