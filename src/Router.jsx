import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: "./components/LandingPage.jsx",
    }
  ];

  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router}/>
  );
};

export default Router;