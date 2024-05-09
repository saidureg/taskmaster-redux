import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../utils/firebase.config";
import { setUser, toggleLoading } from "../../redux/features/user/userSlice";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const { isLoading, email } = useSelector((state) => state.userSlice);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ email: user.email, name: user.displayName }));
        dispatch(toggleLoading(false));
      } else {
        dispatch(toggleLoading(false));
      }
    });
  }, [dispatch]);

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
