import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/HomePage';
import Recipes from './pages/RecipesPage';
import Random from './pages/RandomPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
   
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/recipes',
        element: <Recipes />,
      },
      {
        path: '/random-recipe',
        element:<Random />,
      },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);