import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CrearUsuario } from "./components/crearUsuario/CrearUsuario.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorPage } from "./components/errorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/crear",
    element: <CrearUsuario />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    <ToastContainer />
  </>
);
