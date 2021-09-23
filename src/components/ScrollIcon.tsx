import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollIcon = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className="fixed block w-10 h-auto p-2 rounded-full outline-none cursor-pointer bg-gray right-2 bottom-2 transition-all duration-500"
      onClick={scrollTop}
    >
      <FontAwesomeIcon className="text-2xl text-white" icon={faArrowUp} />
    </button>
  );
};

export default ScrollIcon;
