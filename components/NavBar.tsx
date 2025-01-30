"use client";

import { NavLinks } from "@/lib/consts";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-10 text-white">
      <div className="">
        <div className={`flex justify-between items-center transition-all duration-300 h-20 px-4 sm:px-6 lg:px-8 bg-black text-white shadow-md`}>
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">Logo</Link>

          {/* Hamburger menu for small screens */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-200"
            >
              {isOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>

          {/* Menu items for large screens */}
          <div className="hidden lg:flex space-x-6">
            {NavLinks.map((navLink, index) => (
              <Link key={index} href={navLink.href}>
                {navLink.name}
              </Link>
            ))}
          </div>
          <div className="h-full hidden lg:flex items-center justify-center space-x-5">
            <Link
              className="px-3 py-2.5 bg-transparent border text-white rounded-lg shadow-lg"
              href="/get-involved"
            >
              Contact Us
            </Link>
            <Link
              className="px-3 py-2.5 bg-white text-black rounded-lg"
              href="/get-involved"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {isOpen && (
        <div className="lg:hidden bg-black shadow-md flex flex-col items-center space-y-1.5">
          {NavLinks.map((navLink, index) => (
            <Link key={index} href={navLink.href}>
              {navLink.name}
            </Link>
          ))}
          <div className="flex space-x-5">
            <Link href="/get-involved">Contact Us</Link>
            <Link href="/get-involved">Learn More</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
