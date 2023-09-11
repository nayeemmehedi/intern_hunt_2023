import { useNavigate } from "react-router-dom";

const isAuthenticated = false;

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  return isAuthenticated ? children : navigate("/home");
};

export default PrivateRoute;
