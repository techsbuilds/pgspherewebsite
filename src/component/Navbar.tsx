"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    // When not on the homepage, redirect to the section on home
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      // Normal scroll behavior for main page
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 bg-[#202947] shadow-lg h-16 overflow-x-hidden`}>
      <div className="w-full mx-0 px-3 sm:px-4 lg:pl-22 lg:pr-30 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/favicon.ico" alt="PGSPHERE Logo" onClick={() => scrollToSection("home")} className ='rounded-xl h-10 w-10 md:h-10 md:w-10 cursor-pointer' />
            <span className="text-xl font-bold font-sans text-white cursor-pointer" onClick={() => scrollToSection("home")}>Pgsphere</span>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
            <button
              onClick={() => scrollToSection("home")}
              className='text-lg font-medium transition-colors  cursor-pointer duration-300 text-white hover:text-gray-300' >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-lg font-medium transition-colors  cursor-pointer  duration-300 text-white hover:text-gray-300`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-lg font-medium transition-colors  cursor-pointer  duration-300 text-white hover:text-gray-300`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className={`text-lg font-medium transition-colors  cursor-pointer duration-300 text-white hover:text-gray-300`}
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-lg font-medium transition-colors  cursor-pointer  duration-300 text-white hover:text-gray-300`}
            >
              Contact
            </button>
          </div>

          {/* Login/Signup Buttons - Right */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://app.pgsphere.com/login" target="_blank"
              className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer  duration-300 text-white border border-white hover:bg-white hover:text-[#202947]`}
            >
              Login
            </a>
            <Link
              href={'/signup'}
              className={`px-4 py-2 rounded-lg font-medium transition-colors  cursor-pointer duration-300 bg-[#3B82F6] text-white hover:bg-[#2563EB]`}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`transition-colors duration-300 text-white hover:text-gray-300`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 flex items-start pointer-events-none">
            {/* translucent backdrop that doesn't block scroll/taps */}
            <div className="absolute inset-0 pointer-events-none" />
            <div className={`pointer-events-auto w-full   shadow-2xl px-3 pt-4 pb-6 border-b rounded-b-xl transition-colors duration-300 bg-[#202947] border-gray-600 mt-16`}> 
              {/* inner card like the reference */}
              <div className="h-full ">
                <div className="bg-[#1b2440] rounded-lg p-3">
                  <button
                    onClick={() => scrollToSection("home")}
                    className={`block w-full text-left px-3 py-3 text-lg font-medium text-white`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className={`block w-full text-left text-lg px-3 py-3 text-base font-medium rounded-md transition-colors duration-300 text-white hover:text-gray-300 hover:bg-gray-700/40`}
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className={`block w-full text-left px-3 py-3 text-lg font-medium rounded-md transition-colors duration-300 text-white hover:text-gray-300 hover:bg-gray-700/40`}
                  >
                    Services
                  </button>
                  
                  <button
                    onClick={() => scrollToSection("demo")}
                    className={`block w-full text-left px-3 py-3 text-lg font-medium rounded-md transition-colors duration-300 text-white hover:text-gray-300 hover:bg-gray-700/40`}
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={`block w-full text-left px-3 py-3 text-lg font-medium rounded-md transition-colors duration-300 text-white hover:text-gray-300 hover:bg-gray-700/40`}
                  >
                    Contact
                  </button>
                 
                  <div className="mt-4 space-y-3">
                    <a href="https://app.pgsphere.com/login" target="_blank" className="text-center text-white text-lg">Login</a>
                    <Link
                      href={'/signup'}
                      className={`block w-full px-3 py-3 text-base font-semibold rounded-md transition-colors duration-300 bg-[#3B82F6] text-white hover:bg-[#2563EB]`}
                    >
                      Sign Up
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
