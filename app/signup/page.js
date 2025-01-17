"use client";

import { useState } from "react";
import { auth, db } from "../components/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in Firestore
      const userDoc = doc(db, "users", user.email); // Use email as the document ID
      await setDoc(userDoc, {
        email: user.email,
        password: password, // Store hashed passwords in real applications
        createdAt: new Date().toISOString(),
      });

      toast.success("Registration successful!");
    } catch (error) {
      toast.error("Signup failed! Please try again.");
      console.error("Signup Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center">
      <Toaster />
      <form
        onSubmit={handleSignup}
        className="bg-gray-800 p-8 rounded shadow-lg w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
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
          Sign Up
        </button>
      </form>
    </div>
  );
}
