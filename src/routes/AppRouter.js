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
import Articles from '../pages/Articles';
import Article from '../pages/Article';
import Delivery from '../pages/Delivery';
import ShoppingCart from '../pages/ShoppingCart';
import Checkout from '../pages/Checkout';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import ResetPassword from '../pages/ResetPassword';

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
        {path: 'articles', element: <Articles/> , breadcrumb: 'Статьи и советы'},
        {path: 'article', element: <Article/> , breadcrumb: 'Статья'},
        {path: 'delivery', element: <Delivery /> , breadcrumb: 'Доставка'},
        {path: 'cart', element: <ShoppingCart /> , breadcrumb: 'Корзина'},
        {path: 'checkout', element: <Checkout /> , breadcrumb: 'Оформление заказа'},
        {path: 'registration', element: <Registration /> , breadcrumb: 'Регистрация'},
        {path: 'login', element: <Login /> , breadcrumb: 'Вход в личный кабинет'},
        {path: 'reset-password', element: <ResetPassword /> , breadcrumb: 'Восстановление пароля'},
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