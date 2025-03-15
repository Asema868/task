import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRoutes } from "./router/routes.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
