import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './pages/LoginForm.jsx';
import SignupForm from './pages/SignupForm.jsx';
import BlogPostForm from './pages/BlogPostForm.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },

  {
    path: '/login',
    element: <LoginForm label='LOGIN' />,
  },

  {
    path: '/sign-up',
    element: <SignupForm label='SIGN-UP' />,
  },

  {
    path: '/blog-post',
    element: <BlogPostForm label='SUBMIT' />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
