import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../../pages/layout/layout";
import Home, { loader as homeLoader } from "../../pages/home/home";
import Error from "../../pages/error/error.jsx";

// Configuration du routeur normal pour le site en ligne
const router = createBrowserRouter([
  {
    path: "/Portfolio-Benoit-Grebert",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/Portfolio-Benoit-Grebert",
        element: <Home />,
        loader: homeLoader,
      },
    ],
  },
]);

// Fonction pour gérer le choix entre le mode maintenance et le mode normal
export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
