'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="relative mx-auto place-content-center place-items-center">
      <input
        type="checkbox"
        id="darkModeSwitch"
        className="sr-only flex items-center"
        checked={currentTheme === 'dark'}
        onChange={() => {
          setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        }}
      />
      <label htmlFor="darkModeSwitch" className="flex cursor-pointer items-center">
        {/* <div className="relative w-10 h-4 bg-blue-600 rounded-full shadow-inner items-center">
          <div
            className={`absolute left-0 top-0 w-4 h-4 border-blue-600 border bg-white rounded-full transition-transform duration-300 ease-in-out transform ${
              currentTheme === "dark" ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </div> */}
        <div className="ml-3 text-sm text-primary">
          {currentTheme === 'dark' ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
        </div>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
