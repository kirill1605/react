import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { About } from "../components/pages/about/about";
import { Home } from "../components/pages/home/home";
import { Products } from "../components/pages/products/products";
import { Pdf } from "../components/pages/pdf/index.tsx";
import { DynamicPagination } from "../components/pages/DynamicPagination/index.tsx";
import { ABOUT_ROUTE, HOME_ROUTE, PRODUCTS_ROUTE, PDF_ROUTE, PAGINATION_ROUTE } from "./configs";
import { useAuth } from "../hooks/useAuth";

const MainRouter: React.FC = () => {
  const { isAuth } = useAuth();

  const basedPath: RouteObject[] = [
    { path: ABOUT_ROUTE, element: <About /> },
    { path: HOME_ROUTE, element: <Home /> },
    { path: PDF_ROUTE, element: <Pdf /> },
    { path: PAGINATION_ROUTE, element: <DynamicPagination /> },
  ];

  const authPath: RouteObject[] = isAuth ? [{ path: PRODUCTS_ROUTE, element: <Products /> }] : [];

  const resultPaths: RouteObject[] = basedPath.concat(authPath);

  return useRoutes(resultPaths);
};

export default MainRouter;
