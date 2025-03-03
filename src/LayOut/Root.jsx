import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { getStoredCart } from "../utility/localStorage";
// import { Helmet } from "react-helmet-async";

const Root = () => {
  const location = useLocation();
  const [carts, setCarts] = useState([]);
  const path = location.pathname;
  useEffect(() => {
    const getCarts = getStoredCart("cartList");
    setCarts(getCarts);
  }, [location]);
  return (
    <div className="">
      {/* <Helmet>
        <title>
          {path
            ? `${path.toUpperCase()} - My Gadget Store`
            : "My Gadget Store"}
        </title>
      </Helmet> */}
      <Navbar path={path} carts={carts}></Navbar>
      <div className="min-h-[calc(100vh-284px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
