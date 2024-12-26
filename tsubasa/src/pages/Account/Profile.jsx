import React, { useState, useEffect } from "react";
import { auth, db } from "@/components/firebase"; // Ensure you have Firebase initialized
import { doc, getDoc } from "firebase/firestore";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.error("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (!userDetails) {
    return <div className="text-center text-lg text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center">
        <img
          src={userDetails.photo || "/default-avatar.png"}
          alt="Profile"
          className="w-32 h-32 rounded-full shadow-lg"
        />
        <h2 className="text-2xl font-semibold mt-4">{userDetails.firstName}</h2>
        <p className="text-gray-500">{userDetails.email}</p>
      </div>
      <div className="mt-6">
        <p>
          <span className="font-semibold">First Name:</span> {userDetails.firstName}
        </p>
        <p>
          <span className="font-semibold">Last Name:</span> {userDetails.lastName || "N/A"}
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="mt-6 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
