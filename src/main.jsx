import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { loader as itemsLoader } from "./App.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    loader: itemsLoader,
    element: <App />,
  },
  {
    path: "items/:itemId",
    element: <ItemPage></ItemPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
