import React from "react";
import { useAuth } from "../context/AuthContext";
import { redirect } from "react-router";

function Dashboard() {
  const auth = useAuth();
  if (auth.isAuthenticated) {
    redirect("/login");
  }
  return (
    <div>
      <h1>Dashbord Page</h1>
    </div>
  );
}

export default Dashboard;
