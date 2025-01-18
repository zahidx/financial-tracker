"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu visibility
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold hover:text-yellow-400">
              Financial Tracker
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4 items-center">
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

          {/* Right: Dark Mode Toggle for both Mobile and Desktop */}
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="text-gray-400 hover:text-yellow-400 focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <FontAwesomeIcon icon={faSun} className="text-yellow-400 text-2xl" />
              ) : (
                <FontAwesomeIcon icon={faMoon} className="text-blue-400 text-2xl" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-yellow-400 focus:outline-none"
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
        <div className="md:hidden flex flex-col space-y-4 px-4 py-2 bg-background text-foreground">
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
