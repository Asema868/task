// import { Navigate } from "react-router";

// export const PrivateRoute = ({
//   Component,
//   isAllowed,
//   redirectPath = "/login",
// }) => {
//   if (!isAllowed) {
//     return <Navigate to={redirectPath} replace />;
//   }

//   return Component;
// };

import { Navigate } from "react-router";

export const PrivateRoute = ({
  Component,
  fallBackPath,
  isAllowed,
  redirectPath,
}) => {
  if (!!isAllowed) {
    return <Navigate to={redirectPath || fallBackPath} />;
  }
  return Component;
};
