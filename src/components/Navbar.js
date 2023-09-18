import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null); // Reference to the navbar element

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const navbarHeight = navbarRef.current.clientHeight; // Get the height of the navbar
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
    closeMobileMenu(); // Close the mobile menu after clicking a link
  };

  return (
    <div
      ref={navbarRef} // Set a reference to the navbar element
      className={`${
        isSticky
          ? "fixed top-0 left-0 right-0 bg-[#12123E] text-white border-gray-200 dark:bg-gray-900"
          : "bg-[#12123E] text-white border-gray-200 dark:bg-gray-900"
      } ${isSticky ? "p-1" : ""} transition-all duration-2000`}
      style={{ zIndex: 1000 }}
    >
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center p-4 lg:p-0"
        >
          <span className="self-center lg:text-2xl font-semibold whitespace-nowrap dark:text-white">
            Farhan's Portfolio
          </span>
        </a>
        <ul className="font-medium hidden md:flex p-0 space-x-8">
          <li>
            <button
              onClick={() => scrollToSection("#hero")}
              className="hover:text-[#9191c4] focus:outline-none"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("#about")}
              className="hover:text-[#9191c4] focus:outline-none"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("#contact")}
              className="hover:text-[#9191c4] focus:outline-none"
            >
              Contact
            </button>
          </li>
        </ul>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-transparent hover:bg-transparent focus:ring-transparent focus:outline-none transition-transform duration-300 ease-in-out transform"
          style={{
            transform: isMobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          <span className="sr-only">Toggle mobile menu</span>
          <svg
            className="w-5 h-5 transition-opacity duration-300 ease-in-out"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 6L18 18M6 18L18 6"
                  : "M1 1h15M1 7h15M1 13h15"
              }
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 transition-max-h duration-300 ease-in-out"
              : "max-h-0 opacity-0 transition-max-h duration-300 ease-in-out"
          } w-full md:hidden bg-[#12123E]`}
          id="navbar-default"
        >
          <div className="flex flex-col justify-center items-center">
            <ul className="font-medium flex flex-col p-0 py-4 rounded-lg space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection("#hero")}
                  className="hover:text-[#9191c4] focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="hover:text-[#9191c4] focus:outline-none"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="hover:text-[#9191c4] focus:outline-none"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
