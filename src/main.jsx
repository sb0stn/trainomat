import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App, { loader as itemsLoader } from "./App.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import SearchResults from "./components/SearchResults.jsx";
import "./index.css";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  </>
);
