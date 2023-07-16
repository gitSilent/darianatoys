import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './pages/Main/Main';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Feedback from './pages/Feedback/Feedback';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/> ,
    errorElement: <ErrorPage/>
  },
  {
    path: "/products",
    element: <Products/> ,
    errorElement: <ErrorPage/>

  },
  {
    path: "/about",
    element: <About/> ,
    errorElement: <ErrorPage/>
  },
  {
    path: "/cart",
    element: <ShoppingCart/> ,
    errorElement: <ErrorPage/>
  },
  {
    path: "/feedback",
    element: <Feedback/> ,
    errorElement: <ErrorPage/>
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
