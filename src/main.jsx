import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Root from "./routes/Root.jsx";
import ItemDetail from "./routes/ItemDetail/ItemDetail.jsx";
import Home from "./routes/Home/Home.jsx";
import Info from "./routes/Info/Info.jsx";
import "./index.scss";
import "normalize.css";
import "@fontsource/inter/400.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "items/:itemId",
        element: <ItemDetail />,
      },
      {
        path: "/info",
        element: <Info />,
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
