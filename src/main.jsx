import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { loader as itemsLoader } from "./App.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import SearchResults from "./components/SearchResults.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    loader: itemsLoader,
    id: "root",
    element: <App />,
    children: [
      {
        path: "items/:itemId",
        element: <ItemPage />,
      },
      {
        path: "/",
        element: <SearchResults />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
