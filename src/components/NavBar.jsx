import React from 'react';
import { FloatingDockDemo } from './Dock';

const NavBar = () => {
  return (
    <header className="relative z-10 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 pt-6 md:pt-10 gap-4">
       
        <h1 className="text-[15px] md:text-2xl font-bold font-supreme text-center md:text-left">
          <span className="text-3xl">M</span>uhammad
          <span className="text-purple-400"> <span className="text-3xl">A</span>bdullah</span>
        </h1>

      
        <div className="flex gap-4">
       
          <a
            href="https://github.com/Pkabdullah"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white hover:translate-y-2 hover:rounded-full transition-all duration-500"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 15 15"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5.25C3.5.25.25 3.5.25 7.5c0 3.2 2.1 5.9 4.95 6.85.35.07.5-.15.5-.35v-1.25c-2 .45-2.45-1-2.45-1-.3-.75-.75-1-.75-1-.6-.4.05-.4.05-.4.7.05 1.1.75 1.1.75.6 1.05 1.6.8 2 .6.05-.45.25-.8.45-1-1.8-.2-3.7-.9-3.7-4.05 0-.9.3-1.6.8-2.1-.1-.2-.35-.9.05-1.85 0 0 .6-.2 2 .8a6.8 6.8 0 0 1 3.65 0c1.4-1 2-.8 2-.8.4.95.15 1.65.05 1.85.5.55.8 1.2.8 2.1 0 3.15-1.9 3.85-3.75 4.05.3.25.5.7.5 1.45v2.15c0 .2.15.43.5.35A7.3 7.3 0 0 0 14.75 7.5C14.75 3.5 11.5.25 7.5.25z"
              ></path>
            </svg>
          </a>

          
          <a
            href="https://linkedin.com/in/m-abdullah%E2%9A%99%EF%B8%8Fweb-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] text-white hover:translate-y-2 hover:rounded-full transition-all duration-500"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1.1em"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
            </svg>
          </a>
        </div>
      </div>

    
      <FloatingDockDemo />
    </header>
  );
};

export default NavBar;


