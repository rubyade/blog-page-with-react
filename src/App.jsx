import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import LoginForm from './pages/LoginForm.jsx';
import SignupForm from './pages/SignupForm.jsx';
import BlogPostForm from './pages/BlogPostForm.jsx';
import Navbar from './components/navbar/Navbar.jsx';
// import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <NotFound />,
//   },

//   {
//     path: '/login',
//     element: <LoginForm label='LOGIN' />,
//   },

//   {
//     path: '/sign-up',
//     element: <SignupForm label='SIGN-UP' />,
//   },

//   {
//     path: '/blog-post',
//     element: <BlogPostForm label='SUBMIT' />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path='login' element={<LoginForm label='LOGIN' />} />
      <Route path='sign-up' element={<SignupForm label='SIGN-UP' />} />
      <Route path='blog-post' element={<BlogPostForm label='SUBMIT' />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
