import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import person from '../../assets/person.svg';
import shop from '../../assets/shop.svg';
import yurak from '../../assets/yurak.svg';
import seorch from '../../assets/seorch.svg';
import logo from '../../assets/Logo.svg';
import { FiMenu, FiX } from "react-icons/fi";
import { useProduct } from '@/api/hooks/useProduct';
import useDebounce from '@/hooks/useDebounce';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [valyue, setValue] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const text = useDebounce(valyue);
  const { getSearchProduct } = useProduct();
  const { data } = getSearchProduct({ q: text.trim("") });

  const hendilCheng = (e) => setValue(e.target.value);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 mb-16">
      <nav className="container px-4 py-3 flex justify-between items-center">
        <NavLink to={"/"}>
          <img src={logo} alt="logo" className="w-24" />
        </NavLink>

        <ul className="hidden md:flex items-center gap-10 text-[16px] font-medium">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/contact">Contakt</NavLink></li>
          <li><NavLink to="/abaut">Abaut</NavLink></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button><img src={person} alt="user" className="w-6" /></button>
          <button onClick={() => setSearchOpen(prev => !prev)}><img src={seorch} alt="search" className="w-6" /></button>
          <button><NavLink to="/wishlist"><img src={yurak}  alt="wishlist" className="w-6" /></NavLink></button>
          <button> <NavLink to="/cart"><img src={shop} alt="cart" className="w-6" /></NavLink> </button>
        </div>

        {/* <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button> */}
      </nav>

      {searchOpen && (
        <div className="absolute top-[70px] left-4 right-4 bg-white border rounded-md shadow p-4 z-40 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Qidiruv..."
            value={valyue}
            onChange={hendilCheng}
            className="w-full border px-3 py-2 rounded outline-none focus:ring focus:ring-yellow-400 text-sm"
          />
          <div className="mt-2 max-h-60 overflow-y-auto">
            {data?.data?.products?.length > 0 ? (
              data.data.products.map(item => (
                <div key={item.id} className="flex items-center gap-3 py-2 border-b">
                  <img src={item.thumbnail} alt={item.title} className="w-10 h-10 rounded object-cover" />
                  <p className="text-sm">{item.title}</p>
                </div>
              ))
            ) : valyue.length > 1 ? (
              <p className="text-sm text-gray-500">Mahsulot topilmadi</p>
            ) : null}
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-50 flex justify-around items-center px-4 py-2 md:hidden text-xs">
        <NavLink to="/" className="flex flex-col items-center">
          <img src={logo} alt="Home" className="w-6 h-6" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/shop" className="flex flex-col items-center">
          <img src={shop} alt="Shop" className="w-6 h-6" />
          <span>Shop</span>
        </NavLink>
        <NavLink to="/wishlist" className="flex flex-col items-center">
          <img src={yurak} alt="Wishlist" className="w-6 h-6" />
          <span>Like</span>
        </NavLink>
        <NavLink to="/cart" className="flex flex-col items-center">
          <img src={shop} alt="Cart" className="w-6 h-6" />
          <span>Cart</span>
        </NavLink>
        <button onClick={() => setSearchOpen(prev => !prev)} className="flex flex-col items-center">
          <img src={seorch} alt="Search" className="w-6 h-6" />
          <span>Search</span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 border-t shadow-sm">
          <ul className="space-y-2 text-center text-sm">
            <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/shop" onClick={() => setMenuOpen(false)}>Shop</NavLink></li>
            <li><NavLink to="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist</NavLink></li>
            <li><NavLink to="/cart" onClick={() => setMenuOpen(false)}>Cart</NavLink></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
