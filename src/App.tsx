import React from "react";
import Landing from "../Pages/LandingPage/Landing"; // Importing Landing component
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobsPage from "../Pages/JobsPage/JobsPage"; // Importing JobsPage component
import LoginPage from "../Pages/LoginPage/LoginPage"; // Importing LoginPage component
import Register from "../Pages/RegisterPage/Register"; // Importing Register component
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/jobs",
      element: <JobsPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
