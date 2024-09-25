import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from "../public/favicon.ico"

const Layout = ({ children }) => {
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
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                    className="peer-checked:hidden"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    className="hidden peer-checked:block"
                />
                </svg>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden hidden peer-checked:block">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/">
                <p className="text-[#15310B]  hover:text-[#E0E5C6] block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </p>
              </Link>
              <Link href="/about">
                <p className="text-[#15310B]  hover:text-[#E0E5C6] block px-3 py-2 rounded-md text-base font-medium">
                  About Us
                </p>
              </Link>
              <Link href="/services">
                <p className="text-[#15310B]  hover:text-[#E0E5C6] block px-3 py-2 rounded-md text-base font-medium">
                  Services
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-[#15310B]  hover:text-[#E0E5C6] block px-3 py-2 rounded-md text-base font-medium">
                  Contact Us
                </p>
              </Link>
            </div>
          </div>
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
