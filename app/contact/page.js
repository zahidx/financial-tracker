"use client";

import { useState } from "react";
import { FaPaperPlane, FaEnvelope, FaUser } from "react-icons/fa"; // Add icons for professional touch

export default function Contact() {
  const [name, setName] = useState(""); // Name state
  const [email, setEmail] = useState(""); // Email state
  const [message, setMessage] = useState(""); // Message state

  return (
    <div className="min-h-screen bg-[#155E95] text-white flex flex-col items-center justify-center py-12 px-6 md:px-12 dark:bg-[#260C46] dark:text-white">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-xl transform transition-all duration-700 ease-in-out animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600 dark:text-blue-300 animate__animated animate__fadeIn animate__delay-1s">
          Contact Us
        </h1>
        
        <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
          We would love to hear from you. Fill in the form below and we’ll get back to you shortly.
        </p>
        
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 dark:text-gray-200 font-medium mb-2 flex items-center">
              <FaUser className="mr-2" /> Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 transition duration-300"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 dark:text-gray-200 font-medium mb-2 flex items-center">
              <FaEnvelope className="mr-2" /> Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 transition duration-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-800 dark:text-gray-200 font-medium mb-2 flex items-center">
              <FaPaperPlane className="mr-2" /> Your Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 transition duration-300"
              rows="4"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md shadow-lg transform hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          <span>Need help? </span>
          <a href="mailto:support@example.com" className="text-blue-500 hover:underline">Email Support</a>
        </div>
      </div>
    </div>
  );
}
