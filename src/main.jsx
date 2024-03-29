import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyRouter from "./routers/RouterProvider";
import AuthProvider from "./authProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={MyRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
