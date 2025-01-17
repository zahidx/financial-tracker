"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold hover:text-yellow-400">
              Financial Tracker
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
            <Link href="/about" className="hover:text-yellow-400">
              About
            </Link>
            <Link href="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
            <Link href="/signup" className="hover:text-yellow-400">
              Sign Up
            </Link>
            <Link href="/login" className="hover:text-yellow-400">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-4 py-2 bg-gray-700">
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
          <Link href="/signup" className="hover:text-yellow-400">
            Sign Up
          </Link>
          <Link href="/login" className="hover:text-yellow-400">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
