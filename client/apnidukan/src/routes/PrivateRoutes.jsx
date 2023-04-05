import { useSelector, useDispatch } from "react-redux";
import { Navigate,useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((store) => store.authReducer.isLoggedIn);
  const location = useLocation();
  console.log("required-auth",location);
  
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{data:location.pathname}} />;
  }
  return children;
};

export default PrivateRoute;
