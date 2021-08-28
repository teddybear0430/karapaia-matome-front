import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ToggleThemeMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button
        className="block w-10 h-auto p-2 rounded-full outline-none cursor-pointer hover:bg-black hover:bg-opacity-10 :dark:hover:bg-white :dark:hover:bg-opacity-20 transition-all duration-500"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <>
            {theme === 'dark' ? (
              <FontAwesomeIcon className="text-yellow-500" icon={faMoon} />
            ) : (
              <FontAwesomeIcon className="w-5 text-yellow-300" icon={faSun} size="lg" />
            )}
          </>
        )}
      </button>
    </>
  );
};

export default ToggleThemeMode;
