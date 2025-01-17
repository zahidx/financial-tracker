"use client";

import { useEffect, useState } from "react";
import { auth } from "../components/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [userEmail, setUserEmail] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email); // Set the email address
        setLoading(false); // Set loading to false once user is fetched
      } else {
        router.push("/login"); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login"); // Redirect after sign-out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while auth state is being checked
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-8 rounded shadow-lg w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Your Profile</h1>
        <p className="text-lg mb-6">
          Your email: <span className="font-medium">{userEmail}</span>
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded shadow-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
