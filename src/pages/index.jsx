import { Suspense } from '@/utils'
import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import DetailPages from './detailPages/DetailPages'
const Layout = lazy(()=> import("./layout/Layout"))
const Home = lazy(()=> import("./home/Home"))
const Shop = lazy(()=> import("./shop/Shop"))
const Wishlist = lazy(()=> import("./wishlist/Wishlist"))
const Cart = lazy(()=> import("./cart/Cart"))

const MainRouters = () => {
  return (
    <>
    {
      useRoutes([
        {path: "/", element:<Suspense><Layout/></Suspense>, children: [
          {path: "/", element:<Suspense><Home/></Suspense>},
          {path: "/shop", element:<Suspense><Shop/></Suspense> },
          {path: "/wishlist", element:<Suspense><Wishlist/></Suspense> },
          {path: "/cart", element:<Suspense><Cart/></Suspense> },
          {path: "/product/:id", element:<Suspense><DetailPages /></Suspense> },
        ]},
      ])
    }

    </>
  )
}

export default MainRouters