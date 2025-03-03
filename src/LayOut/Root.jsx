import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import { Helmet } from "react-helmet-async";

const Root = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="">
      {/* <Helmet>
        <title>
          {path
            ? `${path.toUpperCase()} - My Gadget Store`
            : "My Gadget Store"}
        </title>
      </Helmet> */}
      <Navbar path={path}></Navbar>
      <div className="min-h-[calc(100vh-284px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
