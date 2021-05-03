import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import Contact from '@/components/Contact';

export default function Container({ children }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-light dark:bg-dark  ">
      <nav className=" flex justify-between items-center w-full p-8 my-0 md:mb-8 mx-z bg-light dark:bg-dark bg-opacity-60">
        <div className="flex items-center  ">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-4 w-4 text-gray-800 dark:text-gray-200"
              >
                {theme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
          <div className="hidden ml-14 md:block">
            <Contact />
          </div>
        </div>
        <div>
          <a
            href="#About"
            className="p-1.5 sm:p-4 text-gray-900 dark:text-gray-100"
          >
            About
          </a>
          <a
            href="#Projects"
            className="p-1.5 sm:p-4 text-gray-900 dark:text-gray-100"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="p-1.5 sm:p-4 text-gray-900 dark:text-gray-100"
          >
            Contact
          </a>
        </div>
      </nav>
      <main className="flex flex-col justify-center bg-light dark:bg-dark px-8 ">
        {children}
        <footer className="flex flex-col items-center mb-4 md:hidden">
          <Contact />
        </footer>
        <div className="flex items-center justify-center mt-2 mb-4">
          <a
            href="https://github.com/Hamaad-Siddiqui/Next-Portfolio"
            aria-label="Portfolio Github"
            target="_blank"
            rel="noopener noreferrer"
            className="
          text-xs text-gray-900 dark:text-gray-100 hover:text-green-500 dark:hover:text-green-300"
          >
            Made with ❤️ using Next.JS & TailwindCSS
          </a>
        </div>
      </main>
    </div>
  );
}
