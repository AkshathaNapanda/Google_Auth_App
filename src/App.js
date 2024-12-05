// src/App.js
import React, { useState } from "react";
import { signInWithGoogle, signOutUser } from "./firebase";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null); // Store the logged-in user

  // Handle Google Login
  const handleLogin = async () => {
    try {
      const loggedInUser = await signInWithGoogle();
      console.log("User Info:", loggedInUser); // Debugging
      setUser(loggedInUser); // Update user state
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  // Handle Google Logout
  const handleLogout = () => {
    signOutUser();
    setUser(null); // Clear user state
  };

  return (
    <div className="App">
      {!user ? (
        <div className="login-container">
          <h1>Login with Google</h1>
          <button onClick={handleLogin}>Sign In</button>
        </div>
      ) : (
        <div className="welcome-container">
          <h1>Welcome, {user.displayName || "User"}!</h1>
          <p>Email: {user.email || "No email available"}</p>
          <button onClick={handleLogout}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default App;
