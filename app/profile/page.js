"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../components/firebase";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Fetch the user data from Firestore
        const userDocRef = doc(db, "users", user.email);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data()); // Store user data from Firestore
          setLoading(false); // Set loading to false once data is fetched
        } else {
          console.error("User data not found in Firestore");
        }
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

        {/* User's Personal Information */}
        <div className="text-lg mb-6">
          <p><strong>Name:</strong> {userData.name || "N/A"}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Verified Email:</strong> Yes</p>
        </div>

        {/* Edit Profile Button */}
        <button
          onClick={() => router.push("/edit-profile")} // Navigate to edit profile page
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow-lg mb-4"
        >
          Edit Profile
        </button>

        {/* Preferences Section */}
        <div className="text-lg mb-6">
          <p><strong>Preferences</strong></p>
          <p><strong>Notifications:</strong> Get notified for entries from group books</p>
          <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-6 rounded shadow-lg">
            Toggle Notifications
          </button>
        </div>

        {/* Logout Button */}
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
