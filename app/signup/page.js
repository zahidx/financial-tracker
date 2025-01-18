"use client";

import { useState } from "react";
import { auth, db } from "../components/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");

  // Handle user signup
  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic validation checks
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Check if the email or username already exists
    try {
      // Check if email already exists
      const userDocRef = doc(db, "users", email);
      const userSnapshot = await getDoc(userDocRef);
      if (userSnapshot.exists()) {
        toast.error("This email is already in use. Please use a different one.");
        return;
      }

      // Check if username already exists
      const usernameQuery = await getDoc(doc(db, "usernames", username));
      if (usernameQuery.exists()) {
        toast.error("This username is already taken. Please choose another.");
        return;
      }

      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Firestore
      const userDoc = doc(db, "users", user.email); // Use email as the document ID
      await setDoc(userDoc, {
        email: user.email,
        phone: phone,
        dob: dob,
        username: username,
        gender: gender,
        createdAt: new Date().toISOString(),
      });

      // Store username as a separate collection for quick lookup
      await setDoc(doc(db, "usernames", username), { email: user.email });

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
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
          required
        />
        
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
          required
        />
        
        <input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
          required
        />
        
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
