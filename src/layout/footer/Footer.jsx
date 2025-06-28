import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg"; 

const Footer = () => {
  return (
    <footer className="container mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 px-4 md:px-0">
        <div className="">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" className="" />
          </NavLink>
          <p className="font-normal mt-[50px] text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables,</p>
          <p className="font-normal text-[#9F9F9F]">FL 33134 USA</p>
        </div>
        <div className="">
          <ul className="r gap-[]">
            <li className="p-3 text-[#9F9F9F]">Link</li>
            <li className="p-3">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="p-3">
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li className="p-3">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="p-3">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="p-3 text-[#9F9F9F]">Help</p>
          <p className="p-3">Payment Options</p>
          <p className="p-3">Returns</p>
          <p className="p-3">Privacy Policies</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
