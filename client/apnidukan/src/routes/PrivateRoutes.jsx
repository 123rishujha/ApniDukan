import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((store) => store.authReducer.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
