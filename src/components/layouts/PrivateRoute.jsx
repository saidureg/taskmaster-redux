import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const isLoading = false;
  const email = "test@gmail.com";

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
