// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
function App() {
  const { user, login, logout, isAuthenticated } = useAuth();
  console.log(isAuthenticated());
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">logout</Link>
      {isAuthenticated() ? <Link to="/dashboard">Dashboard Page</Link> : null}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
