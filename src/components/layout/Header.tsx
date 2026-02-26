import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { futureLinkLogo as logo } from "@/images";
import { ModeToggle } from "../mode-toggle";
import MobileHeader from "./MobileHeader";

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
    { title: "Courses", path: "/courses" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden">
        <MobileHeader />
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        {/*prevent the content going under the header*/}
        <div
          className={`${isScrolled ? "h-18" : "h-24"} transition-all duration-500`}
        ></div>

        <nav
          className={`font-canela fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-in-out ${
            isScrolled
              ? "bg-linear-to-r from-blue-400 to-indigo-500 shadow-xl shadow-indigo-500/30"
              : "bg-white/80 shadow-lg backdrop-blur-md dark:bg-slate-950/80 dark:shadow-slate-900/20"
          }`}
        >
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`flex items-center justify-between transition-all duration-500 ${
                isScrolled ? "h-18" : "h-24"
              }`}
            >
              {/* Logo Section - single element that transforms */}
              <Link
                to="/"
                className={`flex items-center transition-all duration-500 ease-out ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <img
                  src={logo}
                  alt="FutureLink Logo"
                  className={`rounded-full transition-all duration-500 ${
                    isScrolled ? "h-10 w-10" : "h-12 w-12"
                  }`}
                />
                <div className="ml-3 flex flex-col items-end">
                  <p
                    className={`typo-brand-title whitespace-nowrap transition-all duration-500 ${
                      isScrolled
                        ? "text-xl text-white"
                        : "text-2xl text-indigo-700 dark:text-indigo-400"
                    }`}
                  >
                    Future Link
                  </p>
                  <span
                    className={`typo-brand-subtitle transition-all duration-500 ${
                      isScrolled
                        ? "text-white/80"
                        : "text-gray-500 dark:text-slate-400"
                    }`}
                  >
                    Education
                  </span>
                </div>
              </Link>

              {/* Navigation Links - single elements that transform */}
              <div className="block">
                <div className="ml-10 flex items-center space-x-2">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`typo-nav-link rounded-full px-4 py-2 transition-all duration-500 ease-out ${
                        isLoaded
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      } ${
                        isScrolled
                          ? "text-white/90 hover:bg-white/20 hover:text-white"
                          : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-indigo-900/50 dark:hover:text-indigo-300"
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

                  {/*  Button */}
                  <Link
                    to="/enroll"
                    className={`typo-cta ml-4 inline-block transform rounded-lg px-6 py-2.5 transition-all duration-500 ease-out hover:scale-105 active:scale-95 ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    } ${
                      isScrolled
                        ? "bg-white text-indigo-900 shadow-none hover:bg-gray-50"
                        : "bg-indigo-900 text-white shadow-md shadow-indigo-900/20 hover:bg-indigo-800"
                    }`}
                    style={{
                      transitionDelay: isLoaded
                        ? `${150 + navLinks.length * 100}ms`
                        : "0ms",
                    }}
                  >
                    Enroll Now
                  </Link>

                  {/* Dark/Light Mode Toggle */}
                  <ModeToggle
                    isScrolled={isScrolled}
                    isLoaded={isLoaded}
                    animationDelay={
                      isLoaded ? `${250 + navLinks.length * 100}ms` : "0ms"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
