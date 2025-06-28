import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import person from '../../assets/person.svg'
import shop from '../../assets/shop.svg'
import yurak from '../../assets/yurak.svg'
import seorch from '../../assets/seorch.svg'
import logo from '../../assets/logo.svg'
import { FiMenu, FiX } from "react-icons/fi"
import { useProduct } from '@/api/hooks/useProduct'
import useDebounce from '@/hooks/useDebounce'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [valyue, setValue] = useState("");
  const [searchOpen, setSearchOpen] = useState(false); 
  const text =  useDebounce (valyue)
  const { getSearchProduct } = useProduct();
  const { data } = getSearchProduct({ q:text.trim("") });

  const hendilCheng = (e) => {
    setValue(e.target.value);
  };

  return (
    <header className="relative z-50 bg-white shadow">
      <nav className="container flex justify-between items-center py-4 relative">
        <div className='mt-[10px] py-1'>
          <NavLink to={"/"}>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <ul className="hidden md:flex items-center gap-[75px] mt-[10px]">
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/shop"}>Shop</NavLink></li>
          <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
          <li><NavLink to={"/cart"}>Cart</NavLink></li>
        </ul>

        {searchOpen && (
          <div className="absolute top-[70px] right-32 bg-white shadow-md p-4 w-[300px] rounded-md z-50">
            <input
              type="text"
              placeholder="Search..."
              value={valyue}
              onChange={hendilCheng}
              className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-yellow-400"
            />
            <div className="mt-2 max-h-[250px] overflow-y-auto space-y-2">
              {
                data?.data?.products?.length > 0 ? (
                  data.data.products.map(item => (
                    <div key={item.id} className="flex items-center gap-3 border-b pb-2">
                      <img src={item.thumbnail} alt={item.title} className="w-10 h-10 object-cover rounded" />
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                  ))
                ) : valyue.length > 1 ? (
                  <p className="text-sm text-gray-500">No products found</p>
                ) : null
              }
            </div>
          </div>
        )}

        <div className="hidden md:flex items-center gap-[20px] mt-[10px]">
          <button><img src={person} alt="user" /></button>
          <button onClick={() => setSearchOpen(prev => !prev)}>
            <img src={seorch} alt="search" />
          </button>
          <button><img src={yurak} alt="wishlist" /></button>
          <button><img src={shop} alt="cart" /></button>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-md z-40 flex justify-between items-center px-6 py-4 gap-3 md:hidden">
          <NavLink to={"/"} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to={"/shop"} onClick={() => setMenuOpen(false)}>Shop</NavLink>
          <NavLink to={"/wishlist"} onClick={() => setMenuOpen(false)}>Wishlist</NavLink>
          <NavLink to={"/cart"} onClick={() => setMenuOpen(false)}>Cart</NavLink>
           <button onClick={() => setSearchOpen(prev => !prev)}>
            <img src={seorch} alt="search" />
          </button>
        </div>
        
      )}
    </header>
  )
}

export default React.memo(Header)
