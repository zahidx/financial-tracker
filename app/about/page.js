"use client";

import { FaDollarSign, FaChartBar, FaShieldAlt, FaUserCheck } from "react-icons/fa"; // Adding icons for a professional look

export default function About() {
  return (
    <div className="min-h-screen bg-[#155E95] text-white flex flex-col items-center justify-center py-12 px-6 md:px-12 dark:bg-gray-800">
      <div className="bg-[#155E95] text-gray-50 dark:bg-gray-800 p-8 rounded-xl  w-full max-w-4xl transform transition-all duration-700 ease-in-out animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-50 dark:text-blue-300 animate__animated animate__fadeIn animate__delay-1s">
          About Financial Tracker
        </h1>

        <p className="text-center text-gray-50 dark:text-gray-50 mb-6">
          Welcome to Financial Tracker! Our goal is to help you manage your finances effortlessly, giving you an easy way to track your income, expenses, and savings.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-50 dark:text-gray-200 mb-4 flex items-center">
            <FaDollarSign className="mr-3 text-gray-50 dark:text-blue-400" /> Key Features
          </h2>
          <ul className="list-disc ml-6 text-gray-50 dark:text-gray-300">
            <li>Track your income and expenses in real-time.</li>
            <li>Set financial goals and monitor your progress.</li>
            <li>Get insights into your spending habits.</li>
            <li>Secure and easy-to-use dashboard for managing finances.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-50 dark:text-gray-200 mb-4 flex items-center">
            <FaChartBar className="mr-3 text-gray-50 dark:text-blue-400" /> How It Works
          </h2>
          <p className="text-gray-50 dark:text-gray-300">
            Financial Tracker allows you to enter your income and expenses and categorize them accordingly. With our easy-to-use dashboard, you can visualize your financial health at a glance.
            You can also set budgets for specific categories, ensuring that you stick to your financial goals.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-50 dark:text-gray-200 mb-4 flex items-center">
            <FaShieldAlt className="mr-3 text-gray-50 dark:text-blue-400" /> Why Choose Us?
          </h2>
          <p className="text-gray-50 dark:text-gray-300">
            Our app is designed with simplicity in mind, while offering powerful features to manage your finances effectively. Whether you're looking to save for a goal or keep track of your expenses, Financial Tracker has you covered.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-50 dark:text-gray-200 mb-4 flex items-center">
            <FaUserCheck className="mr-3 text-blue-500 dark:text-blue-400" /> Get Started
          </h2>
          <p className="text-gray-50 dark:text-gray-300">
            Ready to take control of your finances? Get started today and start managing your finances with ease and security.
          </p>
        </section>

        <div className="text-center mt-6">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md shadow-lg transform hover:scale-105 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
