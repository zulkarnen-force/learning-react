// Home.js
import React from "react";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div>
      <h2>Welcome, {user ? user.username : "Guest"}!</h2>
      {isAuthenticated() ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default Home;
