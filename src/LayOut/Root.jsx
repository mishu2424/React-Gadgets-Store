import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
    const location = useLocation();
    const path=location.pathname;
    return (
        <div className="">
            <Navbar path={path}></Navbar>
            <div className="min-h-[calc(100vh-284px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;