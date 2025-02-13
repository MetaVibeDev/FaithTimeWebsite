"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";

export const NavbarWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideNavbar = pathname === "/invite";
  
  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}; 