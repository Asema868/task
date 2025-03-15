import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import CharacterPage from "../pages/CharacterPage";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isAuth } from "../store/authSlice";
import NotFound from "../pages/404/NotFound";

export const AppRoutes = () => {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    if (authData?.data?.role) {
      dispatch(isAuth(authData.data.role));
    }
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: role ? <CharacterPage /> : <Navigate to="/login" />,
    },
    {
      path: "/register",
      element: role ? <Navigate to="/" /> : <SignUp />,
    },
    {
      path: "/login",
      element: role ? <Navigate to="/" /> : <SignIn />,
    },
    {
      path: "*",
      element: role ? <Navigate to="/" /> : <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
