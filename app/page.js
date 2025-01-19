"use client";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'animate.css';

import { CurrencyDollarIcon } from "@heroicons/react/24/solid"; // Ensure this matches your installed version
import { Toaster } from "react-hot-toast"; // Import the Toaster component
import "./globals.css";
import Footer from "./pages/footer";

config.autoAddCss = false;

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-[#101529] dark:to-[#2E093C] text-white dark:text-gray-200 flex flex-col items-center justify-center">
        {/* Icon */}
        <div className="mb-8">
          <CurrencyDollarIcon className="h-24 w-24 text-yellow-400 dark:text-yellow-300" />
        </div>

        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Financial Tracker</h1>
          <p className="text-lg">
            Manage your money wisely and keep your finances in check.
          </p>
        </header>

        {/* Render toast notifications */}
        <Toaster position="top-right" reverseOrder={false} />

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-600 text-white py-2 px-6 rounded shadow-lg">
            Get Started
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white py-2 px-6 rounded shadow-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
