import React from 'react';
import logo from "../../public/futureLinkLogo.jpg"; // Placeholder for logo image

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          
          <img src={logo} alt="FutureLink Logo" className="h-8 w-auto" />
          <div className="flex-shrink-0">
            {/* <div className="w-32 h-8 bg-gray-300 flex items-center justify-center rounded">
              <span className="text-gray-700 text-sm font-medium">FutureLink Logo</span>
            </div> */}
            {/* TODO: Replace with actual logo when available */}
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#courses" 
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Courses
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-indigo-600 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;