import Image from "next/image";
import React from "react";

interface NavigationHeaderProps {
  className?: string;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  className = "",
}) => {
  return (
    <header
      className={`hidden sm:flex w-full lg:px-[200px] px-24 bg-white border-b border-gray-200 fixed z-[500] ${className}`}
    >
      <div className="mx-auto py-4 w-[1200px]">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div>
            <h1 className="text-3xl font-bold text-black tracking-normal">
              FaithTime
            </h1>
          </div>
          {/* Navigation Links */}
          <nav className="md:flex  hidden items-center space-x-8">
            <a
              href="#home"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#card"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#detail"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors duration-200"
            >
              Reviews
            </a>
            <a
              href="#download"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors duration-200"
            >
              Download
            </a>
            <a
              href="#footer"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
          {/* CTA Button */}
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;
