"use client";

import { useState } from "react";
import { auth, db } from "../components/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  // Handle user signup
  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic validation checks
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Check if the email already exists
    try {
      const userDocRef = doc(db, "users", email);
      const userSnapshot = await getDoc(userDocRef);
      if (userSnapshot.exists()) {
        toast.error("This email is already in use. Please use a different one.");
        return;
      }

      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Firestore
      const userDoc = doc(db, "users", user.email);
      await setDoc(userDoc, {
        firstName: firstName,
        lastName: lastName,
        email: user.email,
        phone: phone,
        dob: dob,
        gender: gender,
        createdAt: new Date().toISOString(),
      });

      toast.success("Registration successful!");
    } catch (error) {
      toast.error("Signup failed! Please try again.");
      console.error("Signup Error:", error);
    }
  };

  return (
<div className="min-h-screen bg-[#155E95] text-white flex items-center justify-center py-12 px-4 dark:bg-[#260C46] dark:text-white">

      <Toaster />
      <form
        onSubmit={handleSignup}
        className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-lg dark:bg-gray-900"
      >
        <h1 className="text-3xl font-semibold mb-8 text-center">Create Your Account</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-3 rounded-md text-black dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-white"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-3 rounded-md text-black dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-white"
            required
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-md text-black dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-white"
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 mb-4 rounded-md text-black dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-white"
          required
        />

        <input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-3 mb-4 rounded-md text-black dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-white"
          required
        />

        {/* Gender Radio Buttons without border */}
        <div className="mb-6">
          <p className="text-lg font-medium mb-2">Select Gender:</p>
          <div className="flex gap-6 items-center">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
                className="w-5 h-5 "
              />
              <span className="text-white">Male</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
                className="w-5 h-5"
              />
              <span className="text-white">Female</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={gender === "Other"}
                onChange={(e) => setGender(e.target.value)}
                className="w-5 h-5 "
              />
              <span className="text-white">Other</span>
            </label>
          </div>
        </div>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded-md text-black dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-white"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded-md text-black dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-white"
          required
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-md w-full dark:bg-green-600 dark:hover:bg-green-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
