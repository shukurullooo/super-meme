import { Suspense } from '@/utils'
import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import DetailPages from './detailPages/DetailPages'
const Home = lazy(()=> import("./home/Home"))
const Shop = lazy(()=> import("./shop/Shop"))
const Wishlist = lazy(()=> import("./wishlist/Wishlist"))
const Cart = lazy(()=> import("./cart/Cart"))
const Chekaut = lazy(()=> import("./chekaut/Chekaut"))
import Layout from './layout/Layout'; 



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
          {path: "/chekaut", element:<Suspense><Chekaut/></Suspense> },
          {path: "/product/:id", element:<Suspense><DetailPages /></Suspense> },
        ]},
      ])
    }

    </>
  )
}

export default MainRouters