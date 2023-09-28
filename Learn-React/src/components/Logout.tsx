import React from "react";
import { useAuth } from "../context/AuthContext";

function Logout() {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    console.log("log out button clicked");
    logout();
    console.log(user);
  };
  return (
    <div>
      <h1>Logout Page</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Logout;
