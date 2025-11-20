import Image from "next/image";
import React from "react";
import { siteConfig } from "@/config/site";

interface NavigationHeaderProps {
  className?: string;
}

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a
      href={href}
      className="text-base py-[15px] text-[#202020] hover:text-gray-600 transition-colors duration-200"
      style={{ fontFamily: "Roboto, sans-serif", fontWeight: "500" }}
    >
      {label}
    </a>
  );
};

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
            {siteConfig.navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>
          {/* CTA Button */}
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;
