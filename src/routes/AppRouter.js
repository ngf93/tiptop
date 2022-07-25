import React from 'react';
import { useRoutes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import Catalog from '../pages/Catalog';
import Search from '../pages/Search';

export const routeList = [
    {
      path: '/',
      element: <Layout/>,
      children: [
        {index: true, element: <Home /> , breadcrumb: 'Главная'},
        {path: 'catalog', element: <Catalog/> , breadcrumb: 'Каталог'},
        {path: 'search', element: <Search/>, breadcrumb: 'Поиск'},
        {path: 'catalog', element: <Catalog/> , breadcrumb: 'Каталог'},
      ],
    },
  ];

export default function AppRouter() {
    const Wrapper = ({ children }) => {
      const {pathname} = useLocation();
      useLayoutEffect(() => document.documentElement.scrollTo(0, 0), [pathname])
      return children
    }
  
    const element = useRoutes(routeList)
  
    return (
      <Wrapper>
          {element}
      </Wrapper>
    );
  }