import { futureLinkLogoText as logoText } from "@/images";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
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
              ? "bg-linear-to-r from-white to-indigo-500 shadow-xl shadow-indigo-500/30"
              : "bg-white/80 shadow-lg backdrop-blur-md dark:bg-linear-to-r dark:from-slate-100 dark:to-slate-900 dark:shadow-slate-900/20"
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
                  src={logoText}
                  alt="FutureLink Logo"
                  className={`transition-all duration-500 ${
                    isScrolled ? "h-14 w-auto" : "h-18 w-auto"
                  }`}
                />
              </Link>

              {/* Navigation Links -*/}
              <div className="block">
                <div className="ml-10 flex items-center space-x-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`typo-nav-link rounded-full px-4 py-2 transition-all duration-500 ease-out ${
                        isLoaded
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      } ${
                        isScrolled
                          ? "text-indigo-700 hover:bg-white/20 hover:text-white"
                          : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-indigo-900/50 dark:hover:text-indigo-300"
                      }`}
                    >
                      {link.title}
                    </Link>
                  ))}

                  {/*  Button */}
                  <Link
                    to="/enroll"
                    className={`typo-cta hover:bg-indigo-800ml-4 inline-block transform rounded-lg bg-indigo-700 px-6 py-2.5 text-white shadow-md shadow-indigo-900/20 transition-all duration-500 ease-out hover:scale-105 active:scale-95 ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    } `}
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
