import { Navigate } from "react-router";
import { useSelector } from "react-redux";

export const PrivateRoute = ({
  Component,
  isAllowed,
  redirectPath = "/login",
}) => {
  const { role } = useSelector((state) => state.auth);

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return Component;
};
