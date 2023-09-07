import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Devolução } from './routes/devolucao.jsx';
import { Transportes } from 'routes/Transportes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "devolucao",
        element: <Devolução />
      },
      {
        path: "transportes",
        element: <Transportes />
      }
    ]


  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} /> 
  </React.StrictMode>,
)
