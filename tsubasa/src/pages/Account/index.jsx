import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { auth } from "@/components/firebase";

// Account component
const Account = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    
    // Cleanup function to unsubscribe from auth state change listener
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]); // Depend on `user` to trigger navigation when it changes

  return (
    <div>
      {user ? (
        <Profile /> // Show Profile if user is authenticated
      ) : (
        <p>Loading...</p> // Show loading message while checking user status
      )}
    </div>
  );
};

export default Account;
