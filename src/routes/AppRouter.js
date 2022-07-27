import React from 'react';
import { useRoutes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Search from '../pages/Search';
import Category from '../pages/Category';
import Product from '../pages/Product';
import Favorites from '../pages/Favorites';
import Contacts from '../pages/Contacts';

export const routeList = [
    {
      path: '/',
      element: <Layout/>,
      children: [
        {index: true, element: <Home /> , breadcrumb: 'Главная'},
        {path: 'catalog', element: <Catalog/> , breadcrumb: 'Каталог'},
        {path: 'search', element: <Search/>, breadcrumb: 'Поиск'},
        {path: 'category', element: <Category/> , breadcrumb: 'Подкаталог'},
        {path: 'product', element: <Product/> , breadcrumb: 'Товар'},
        {path: 'favorites', element: <Favorites/> , breadcrumb: 'Избранное'},
        {path: 'contacts', element: <Contacts /> , breadcrumb: 'Контактная информация'},
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