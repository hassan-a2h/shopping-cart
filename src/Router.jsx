import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Shop from './components/Shop';

const Router = () => {
  const routes = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: '/shop',
      element: <Shop category={null}/>
    }
  ];

  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router}/>
  );
};

export default Router;