"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the signup page
    if (window.location.pathname === '/signup') {
      // Redirect to home page and then scroll to section
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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      (isScrolled || isMenuOpen)
        ? 'bg-[#202947] shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="w-full lg:w-[70%] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.jpg" alt="PGSPHERE Logo" className={`${isScrolled ? 'rounded-xl' : ''} h-16 w-16 md:h-16 md:w-16`} />
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <button
              onClick={() => scrollToSection("home")}
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-gray-700 hover:text-[#202947]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-gray-700 hover:text-[#202947]'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-gray-700 hover:text-[#202947]'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-gray-700 hover:text-[#202947]'
              }`}
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-gray-700 hover:text-[#202947]'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Login/Signup Buttons - Right */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => window.location.href = '/login'}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-white hover:text-gray-300 border border-white hover:bg-white hover:text-[#202947]' 
                  : 'text-[#202947] border border-[#202947] hover:bg-[#202947] hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => window.location.href = '/signup'}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'bg-white text-[#202947] hover:bg-gray-100' 
                  : 'bg-[#202947] text-white hover:bg-[#1a1f3a]'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`transition-colors duration-300 ${
                (isScrolled || isMenuOpen)
                  ? 'text-white hover:text-gray-300'
                  : 'text-gray-700 hover:text-[#202947]'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 border-t transition-colors duration-300 bg-[#202947] border-gray-600`}>
              <button
                onClick={() => scrollToSection("home")}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 text-white hover:text-gray-300 hover:bg-gray-700`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 text-white hover:text-gray-300 hover:bg-gray-700`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 text-white hover:text-gray-300 hover:bg-gray-700`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("demo")}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 text-white hover:text-gray-300 hover:bg-gray-700`}
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 text-white hover:text-gray-300 hover:bg-gray-700`}
              >
                Contact
              </button>
              <div className="mt-4 space-y-2">
                <button
                  onClick={() => window.location.href = '/login'}
                  className={`block w-full px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 text-white border border-white hover:bg-white hover:text-[#202947]`}
                >
                  Login
                </button>
                <button
                  onClick={() => window.location.href = '/signup'}
                  className={`block w-full px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 bg-white text-[#202947] hover:bg-gray-100`}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
