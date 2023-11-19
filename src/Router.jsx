import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <LandingPage />,
    }
  ];

  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router}/>
  );
};

export default Router;