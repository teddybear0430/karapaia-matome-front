import React from 'react';
import { dateUtil } from '../utils/date-util';

const Footer: React.FC<{ siteName: string }> = ({ siteName }) => {
  const { getYear } = dateUtil();

  return (
    <footer className="p-3 mt-6">
      <p className="text-sm text-center">
        {getYear()} {siteName}
      </p>
    </footer>
  );
};

export default Footer;
