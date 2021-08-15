import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-3">
      <Link href="/">
        <a className="text-2xl font-bold text-blue">カラパイアまとめ</a>
      </Link>
    </header>
  );
};

export default Header;
