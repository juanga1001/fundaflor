import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Carrera from './Components/Carrera/Carrera';
import Error from './Components/Error/Error'
import Registro from './Components/Carrera/Registro';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/carrera",
    element: <Carrera />,
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/*",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
