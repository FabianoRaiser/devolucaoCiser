import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "routes/Home.jsx";
import { Devolução } from "routes/Devolucao.jsx";
import { Transportes } from "routes/Transportes.jsx";
import { TransAutorizacoes } from "routes/TransAutorizacoes.jsx";
import TransAtrasados from "routes/TransAtrasados.jsx";
import { TransPendentes } from "routes/TransPendentes.jsx";

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
        path: "devolucao",
        element: <Devolução />,
      },
      {
        path: "transportes",
        element: <Transportes />,
        children: [
          {
            path: "autorizacoes",
            element: <TransAutorizacoes />,
          },
          {
            path: "atrasados",
            element: <TransAtrasados />,
          },
          {
            path: "pedentes",
            element: <TransPendentes />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
