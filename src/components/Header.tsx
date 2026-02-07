import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import logo from "../../public/futureLinkLogo.jpg";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Courses", path: "#courses" },
    { title: "About", path: "#about" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <>
      {/* Spacer to prevent content from jumping when header becomes fixed */}
      <div
        className={`${isScrolled ? "h-14" : "h-20"} transition-all duration-500`}
      ></div>

      <nav
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-linear-to-r from-blue-600 to-indigo-700 shadow-xl shadow-indigo-500/30"
            : "bg-white shadow-lg"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? "h-14" : "h-20"
            }`}
          >
            {/* Logo Section - single element that transforms */}
            <div
              className={`flex items-center transition-all duration-500 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <img
                src={logo}
                alt="FutureLink Logo"
                className={`transition-all duration-500 ${
                  isScrolled ? "h-8 w-auto" : "h-10 w-auto"
                }`}
              />
              <p
                className={`ml-3 font-bold whitespace-nowrap transition-all duration-500 ${
                  isScrolled ? "text-lg text-white" : "text-xl text-indigo-700"
                }`}
              >
                FutureLink
              </p>
            </div>

            {/* Navigation Links - single elements that transform */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-500 ease-out ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    } ${
                      isScrolled
                        ? "text-white/90 hover:bg-white/20 hover:text-white"
                        : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    }`}
                    style={{
                      transitionDelay: isLoaded
                        ? `${150 + index * 100}ms`
                        : "0ms",
                    }}
                  >
                    {link.title}
                  </Link>
                ))}

                {/* CTA Button */}
                <button
                  className={`ml-4 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-500 ease-out ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  } ${
                    isScrolled
                      ? "bg-white text-indigo-600 shadow-lg hover:bg-gray-100"
                      : "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700"
                  }`}
                  style={{
                    transitionDelay: isLoaded
                      ? `${150 + navLinks.length * 100}ms`
                      : "0ms",
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div
              className={`transition-all duration-500 ease-out md:hidden ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <button
                className={`rounded-lg p-2 transition-colors duration-300 ${
                  isScrolled
                    ? "text-white hover:bg-white/20"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
