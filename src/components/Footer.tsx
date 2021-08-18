import React from 'react';

const Footer: React.FC<{ siteName: string }> = ({ siteName }) => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className="p-3 mt-6">
      <p className="text-sm text-center">{ getYear() } { siteName }</p>
    </footer>
  );
};

export default Footer;
