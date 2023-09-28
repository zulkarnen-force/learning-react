import { redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useAuth();

  return (
    <Route element={isAuthenticated() ? <Component /> : <Component />}></Route>
  );
}

export default PrivateRoute;
