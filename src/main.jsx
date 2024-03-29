import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Reset.css";
import Home from "./components/Home/Home.jsx";
import Bookmarks from "./components/Bookmarks/Bookmarks.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
