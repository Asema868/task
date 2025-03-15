import { createBrowserRouter, Link, RouterProvider } from "react-router";
import CharacterPage from "../pages/CharacterPage";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isAuth } from "../store/authSlice";
import { PrivateRoute } from "./PrivateRoute";
import NotFound from "../pages/404/NotFound";

export const AppRoutes = () => {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);

  useEffect(() => {
    const { data } = JSON.parse(localStorage.getItem("auth")) || {};
    dispatch(isAuth(data?.role));
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute
          Component={<CharacterPage />}
          isAllowed={!!role}
          redirectPath="/login"
        />
      ),
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "*",
      element: (
        <div>
          <NotFound />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
