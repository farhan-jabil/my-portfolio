import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 20;

      if (scrollPosition > scrollThreshold && !isSticky) {
        setIsSticky(true);
      } else if (scrollPosition <= scrollThreshold && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-[#12123E] text-white border-gray-200 dark:bg-gray-900"
          : "bg-[#12123E] text-white border-gray-200 dark:bg-gray-900"
      } ${isSticky ? "h-[70px]" : ""} transition-all duration-2000`}
    >
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Farhan's Portfolio
          </span>
        </a>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Toggle mobile menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block md:hidden" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          {/* Mobile menu content */}
          <div className="flex flex-col justify-center items-center">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#9191c4] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover-bg-transparent transition-colors duration-2000 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#9191c4] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover-bg-gray-700 dark:hover-text-white md:dark:hover-bg-transparent transition-colors duration-2000 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
