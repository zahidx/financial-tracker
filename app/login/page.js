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
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center">
      <Toaster />
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded shadow-lg w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 rounded text-black"
          required
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded shadow-lg w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}
