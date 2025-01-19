"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../components/firebase";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Content from "./pageDetails.js";  // Import Content component

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.email);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data());
          setLoading(false);
        } else {
          console.error("User data not found in Firestore");
        }
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      {/* Custom Navbar */}
      <nav className="bg-gradient-to-r from-[#101529] to-[#2E093C] text-white py-4 px-6 flex justify-between items-center shadow-lg">
        <div className="text-xl font-bold">Financial Tracker</div>
        <div className="flex items-center space-x-4">
          {/* Circle with First Letter */}
          <div className="bg-gray-800 rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold">
            {userData?.firstName?.[0]?.toUpperCase() || "U"}
          </div>
          {/* User Name */}
          <span className="font-medium flex items-center space-x-1">
            <span>{userData?.firstName || "User"}</span>
            {/* Dropdown Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </nav>

      {/* Content Component */}
      <Content userData={userData} />
    </div>
  );
}
