import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/Error.tsx";
import Profile from "../pages/Profile.tsx";
import Home from "../pages/Home.tsx";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App></App>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/profiles/:id',
          element: <Profile />,
        }
      ]
    },
  ]
)