"use client"
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBarsStaggered} from '@fortawesome/free-solid-svg-icons';
import logo from "../public/favicon.ico"

const Layout = ({ children }) => {
    const [showMobile, setShowMobile] = useState(false)
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image src={logo} alt="Web Ality Logo" height={100} width={100} />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-4 items-center">
              <Link href="/">
                <p className="text-[#15310B]  hover:text-[#E0E5C6]">Home</p>
              </Link>
              <Link href="/portfolio">
                <p className="text-[#15310B]  hover:text-[#E0E5C6]">Portfolio</p>
              </Link>
              <Link href="/services">
                <p className="text-[#15310B]  hover:text-[#E0E5C6]">Services</p>
              </Link>
              <Link href="/contact">
                <p className="text-[#15310B]  hover:text-[#E0E5C6]">Contact Us</p>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden hover:stroke-[#E0E5C6]">
                <FontAwesomeIcon icon={faBarsStaggered} size="xl" style={{color: "#15310B"}} onClick={() => {setShowMobile(!showMobile)}}/>
            </div>
          </div>

          {/* Mobile Menu */}
          {showMobile && 
            <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" onClick={() => {setShowMobile(!showMobile)}}>
              <p className="text-[#15310B]  hover:text-[#E0E5C6] block px-3 py-2 rounded-md text-base font-medium">
                Home
              </p>
            </Link>
            <Link href="/portfolio" onClick={() => {setShowMobile(!showMobile)}}>
              <p className="text-[#15310B]  hover:text-[#E0E5C6] block px-3 py-2 rounded-md text-base font-medium">
                Portfolio
              </p>
            </Link>
            <Link href="/services" onClick={() => {setShowMobile(!showMobile)}}>
              <p className="text-[#15310B]  hover:text-[#E0E5C6] block px-3 py-2 rounded-md text-base font-medium">
                Services
              </p>
            </Link>
            <Link href="/contact" onClick={() => {setShowMobile(!showMobile)}}>
              <p className="text-[#15310B]  hover:text-[#E0E5C6] block px-3 py-2 rounded-md text-base font-medium">
                Contact Us
              </p>
            </Link>
          </div>
          }
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-white shadow-lg py-4">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/privacy">
            <p className="text-[#15310B]  hover:text-[#E0E5C6]">Privacy Policy</p>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
