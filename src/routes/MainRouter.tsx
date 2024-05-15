import React from 'react'
import { RouteObject, useRoutes } from "react-router-dom";
import { About } from '../components/pages/about/about';
import { Contacts } from '../components/pages/contacts/contacts';
import { Home } from '../components/pages/home/home';
import { Products } from '../components/pages/products/products';
import { Pdf } from "../components/pages/pdf/index.tsx";
import { ABOUT_ROUTE, CONTACTS_ROUTE, HOME_ROUTE, PRODUCTS_ROUTE, PDF_ROUTE } from './configs';
import { useAuth } from '../hooks/useAuth';

const MainRouter: React.FC = () => {
  const { isAuth } = useAuth();

  const basedPath: RouteObject[] = [
    { path: ABOUT_ROUTE, element: <About /> },
    { path: CONTACTS_ROUTE, element: <Contacts /> },
    { path: HOME_ROUTE, element: <Home /> },
    { path: PDF_ROUTE, element: <Pdf /> },
  ];

  const authPath: RouteObject[] = isAuth
    ? [{ path: PRODUCTS_ROUTE, element: <Products /> }]
    : [];

  const resultPaths: RouteObject[] = basedPath.concat(authPath);

  return useRoutes(resultPaths);
};

export default MainRouter;