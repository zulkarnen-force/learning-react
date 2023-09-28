import react from "react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();

  const handleLogin = () => {
    login({
      token: "aasmdasmda",
      password: "examplePassword",
      is_authenticated: true,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
