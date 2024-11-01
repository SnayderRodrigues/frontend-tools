import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./app/ErrorPage";
import AboutPage from "./app/AboutPage.jsx";
import FeaturedToolsPage2 from "./app/FeaturedToolsPage2.jsx";
import FeaturedTools from "./app/FeaturedTools.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <FeaturedTools />,
      },
      {
        path: "/2",
        element: <FeaturedToolsPage2 />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
