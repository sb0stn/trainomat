import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Root from "./routes/Root.jsx";
import ItemDetail from "./routes/ItemDetail/ItemDetail.jsx";
import Home from "./routes/Home/Home.jsx";
import Info from "./routes/Info/Info.jsx";
import Imprint from "./routes/legal/Imprint.jsx";
import Privacy from "./routes/legal/Privacy.jsx";
import LS from "./routes/legal/LS.jsx";


import "./index.scss";
import "normalize.css";
import "@fontsource/inter/400.css";
import Accessibility from "./routes/legal/Accessibility.jsx";
import DGS from "./routes/legal/DGS.jsx";

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
      {
        path: "/impressum",
        element: <Imprint />,
      },
      {
        path: "/leichte-sprache",
        element: <LS />,
      },
      {
        path: "/dgs",
        element: <DGS />,
      },
      {
        path: "/datenschutz",
        element: <Privacy />,
      },
      {
        path: "/barrierefreiheit",
        element: <Accessibility />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </>
);
