import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { useEffect, useState } from "react";
import { getStoredCart } from "../utility/localStorage";
const Navbar = ({path}) => {
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
      const getCarts=getStoredCart('cartList');
      setCarts(getCarts);
    },[])
    const links = <>
        <NavLink to='/' className={({isActive})=>isActive && 'font-bold underline'}>
                Home
              </NavLink>
              <NavLink to='/statistics' className={({isActive})=>isActive && 'font-bold underline text-[#9538E2]'}>
                Statistics
              </NavLink>
              <NavLink to='/dashboard' className={({isActive})=>isActive && 'font-bold underline text-[#9538E2]'}>
                Dashboard
              </NavLink>
    </>
  return (
    <nav className={`w-[90vw] mx-auto mt-2 ${path!=='/' && 'mb-2'}`}>
      <div className={`navbar shadow-sm px-40 text-black ${path==='/' && 'bg-[#9538E2] text-white'} rounded-t-md`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content gap-4 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">NextGen Gadgets</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-4 menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3 cursor-pointer">
          <div className="bg-white rounded-full p-2 text-black relative"><TiShoppingCart></TiShoppingCart><div className="px-1 rounded-full bg-white absolute right-0 -top-3"><sup className="font-bold text-red-500">{carts.length}</sup></div></div>
          <div className="bg-white rounded-full p-2 text-black"><GiSelfLove></GiSelfLove></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
