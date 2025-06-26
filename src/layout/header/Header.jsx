import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import person from '../../assets/person.svg'
import shop from '../../assets/shop.svg'
import yurak from '../../assets/yurak.svg'
import seorch from '../../assets/seorch.svg'
import logo from '../../assets/logo.svg'
import { FiMenu, FiX } from "react-icons/fi"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative">
      <nav className="container flex justify-between items-center py-4 ">
        <div className='mt-[10px] py-1'>
          <NavLink to={"/"}>
            <img src={logo} alt="logo" className="" />
          </NavLink>
        </div>

        <ul className="hidden md:flex items-center gap-[75px] mt-[10px]">
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/shop"}>Shop</NavLink></li>
          <li><NavLink to={"/wishlist"}>wishlist</NavLink></li>
          <li><NavLink to={"/cart"}>Cord</NavLink></li>

        </ul>

        <div className="hidden md:flex items-center gap-[20px] mt-[10px]">
          <button><img src={person} alt="" /></button>
          <button><img src={seorch} alt="" /></button>
          <button><img src={yurak} alt="" /></button>
          <button><img src={shop} alt="" /></button>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

     {menuOpen && (
  <div className="fixed bottom-0 left-0 w-full bg-white shadow-md z-50 flex  justify-between items-center px-6 py-4 gap-3 md:hidden">
    <NavLink to={"/"} onClick={() => setMenuOpen(false)}>Home</NavLink>
    <NavLink to={"/shop"} onClick={() => setMenuOpen(false)}>Shop</NavLink>
    <NavLink to={"/about"} onClick={() => setMenuOpen(false)}>About</NavLink>
    <NavLink to={"/contact"} onClick={() => setMenuOpen(false)}>Contact</NavLink>
    <div className="flex gap-3 mt-3">
      <button><img src={person} alt="user" /></button>
      <button><img src={seorch} alt="search" /></button>
      <button><img src={yurak} alt="like" /></button>
      <button><img src={shop} alt="shop" /></button>
    </div>
  </div>
)}
    </header>
  )
}

export default React.memo(Header)
