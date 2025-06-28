import { Suspense } from '@/utils';
import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from './layout/Layout';
import Product from './prodacts/Product';

const Home = lazy(() => import("./home/Home"));
const Shop = lazy(() => import("./shop/Shop"));
const Wishlist = lazy(() => import("./wishlist/Wishlist"));
const Cart = lazy(() => import("./cart/Cart"));
const Chekaut = lazy(() => import("./chekaut/Chekaut"));
const Seorch = lazy(() => import("./seorch/Seorch"));

const MainRouters = () => {
  return (
    <>
      {
        useRoutes([
          {
            path: "/", element: <Suspense><Layout /></Suspense>, children: [
              { path: "/", element: <Suspense><Home /></Suspense> },
              { path: "/shop", element: <Suspense><Shop /></Suspense> },
              { path: "/wishlist", element: <Suspense><Wishlist /></Suspense> },
              { path: "/cart", element: <Suspense><Cart /></Suspense> },
              { path: "/chekaut", element: <Suspense><Chekaut /></Suspense> },
              { path: "/seorch", element: <Suspense><Seorch /></Suspense> },
                {path: "/product/:id", element:<Suspense><Product/></Suspense> },
            ]
          },
        ])
      }
    </>
  );
};

export default MainRouters;
