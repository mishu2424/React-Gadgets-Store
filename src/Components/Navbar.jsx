import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { useEffect, useState } from "react";
import { getStoredCart } from "../utility/localStorage";
const Navbar = ({ path }) => {
  const [carts, setCarts] = useState([]);
  let [theme, setTheme] = useState("light");
  useEffect(() => {
    const getCarts = getStoredCart("cartList");
    setCarts(getCarts);
  }, []);
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "font-bold underline" : `${theme==='night' && 'text-white'}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive }) =>
          isActive ? "font-bold underline text-[#9538E2]" : `${theme==='night' && 'text-white'}`
        }
      >
        Statistics
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "font-bold underline text-[#9538E2]" : `${theme==='night' && 'text-white'}`
        }
      >
        Dashboard
      </NavLink>
    </>
  );

  useEffect(()=>{
    const LTheme= localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme',LTheme);
    setTheme(theme);
  },[theme])

  const handleTheme=(e)=>{
    if(e.target.checked){
      setTheme('night');
      localStorage.setItem('theme','night');
    }else{
      setTheme('light');
      localStorage.setItem('theme','light');
    }
  }
  return (
    <nav className={`w-[90vw] mx-auto mt-2 ${(path === "/dashboard" || path === "/statistics") && "mb-2"}`}>
      <div
        className={`navbar shadow-sm lg:px-40 text-black ${
          (path === "/" ||
            path === "/laptops" ||
            path === "/accessories" ||
            path === "/smartphones" ||
            path === "/macbook" ||
            path === "/iphone") &&
          "bg-[#9538E2] text-white"
        } rounded-t-md`}
      >
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
          <ul className="menu gap-4 menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3 cursor-pointer">
          <div className="bg-white rounded-full p-2 text-black relative">
            <TiShoppingCart></TiShoppingCart>
            <div className="px-1 rounded-full bg-white absolute right-0 -top-3">
              <sup className="font-bold text-red-500">{carts.length}</sup>
            </div>
          </div>
          <div className="bg-white rounded-full p-2 text-black">
            <GiSelfLove></GiSelfLove>
          </div>
          <label className="toggle text-base-content">
            <input
            onChange={handleTheme}
              type="checkbox"
              value="synthwave"
              className="theme-controller"
            />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
