"use client";

import { useState } from "react";
import { db } from "../components/firebase"; // Ensure the correct path to your Firebase config
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation"; // Ensure the correct hook is imported
import toast, { Toaster } from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase"; // Firebase authentication import

export default function Login() {
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state
  const router = useRouter(); // Use the Next.js router for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Validate login credentials with Firebase authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      if (userCredential) {
        toast.success("Login successful! Redirecting to your profile...");
        
        // After successful login, wait for 3 seconds and redirect to profile page
        setTimeout(() => {
          router.push("/profile");
        }, 3000);
      }
    } catch (error) {
      // Handle errors like invalid email/password
      if (error.code === "auth/user-not-found") {
        toast.error("No account found with this email!");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Invalid password! Please try again.");
      } else {
        toast.error("An error occurred during login. Please try again.");
      }
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#155E95] dark:bg-gray-900 text-white flex items-center justify-center py-12 px-6">
      <Toaster />
      <form
        onSubmit={handleLogin}
        className="bg-opacity-90 bg-gray-800 p-10 rounded-xl shadow-xl w-full max-w-md transform transition-all duration-700 ease-in-out animate__animated animate__fadeInUp"
      >
        <h1 className="text-3xl font-semibold mb-8 text-center text-blue-500 animate__animated animate__fadeIn animate__delay-1s">Login</h1>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 transition duration-300 transform hover:scale-105"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-medium text-gray-300 mb-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 transition duration-300 transform hover:scale-105"
            required
          />
        </div>

        <div className="flex justify-between mb-6">
          <label className="flex items-center text-sm text-gray-300">
            <input type="checkbox" className="mr-2 text-blue-500" />
            Remember Me
          </label>
          <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg focus:outline-none transition duration-300 transform hover:scale-105"
        >
          Login
        </button>

        <div className="text-center mt-6 text-sm text-gray-400">
          <span>Don't have an account? </span>
          <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
        </div>
      </form>
    </div>
  );
}
