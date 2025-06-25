import Image from 'next/image';
import React from 'react';

interface NavigationHeaderProps {
    className?: string;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({ className = '' }) => {
    return (
        <header className={`w-full lg:px-[200px] px-24 bg-white border-b border-gray-200 ${className}`}>
            <div className="mx-auto py-4 max-w-[1200px]">
                <div className="flex items-center justify-between">
                    {/* Brand Logo */}
                    <div >
                        <h1 className="text-3xl font-bold text-black tracking-normal">
                            FaithTime
                        </h1>
                    </div>
                    {/* Navigation Links */}
                    <nav className="md:flex  hidden items-center space-x-8">
                        <a
                            href="#"
                            className="text-sm font-medium text-black hover:text-gray-600 transition-colors duration-200"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-black hover:text-gray-600 transition-colors duration-200"
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-black hover:text-gray-600 transition-colors duration-200"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-black hover:text-gray-600 transition-colors duration-200"
                        >
                            reviews
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-black hover:text-gray-600 transition-colors duration-200"
                        >
                            Download
                        </a>
                        <a
                            href="#"
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