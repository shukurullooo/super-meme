import Products from '@/components/products/Products';
import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value)
  console.log(wishlist);
  
  return (
    <div>
      <h2>Wishlist</h2>
      {
        wishlist.length ?
        <Products data={wishlist}/>
        :
        <div>
          <img src="https://uzum.uz/static/img/hearts.cf414be.png" alt="" />
        </div>
      }
    </div>
  )
}

export default Wishlist