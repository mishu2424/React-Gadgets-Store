import { Link, NavLink, Outlet } from "react-router-dom";
import Gadget from "./Gadget";
import Gadgets from "./Gadgets";

const GadgetContainer = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-center font-bold text-3xl">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] auto-rows-auto items-start my-3 gap-2 w-[90vw] mx-auto">
        <div className="gadget-options border flex flex-col gap-2 p-2 py-5">
          <NavLink
            className={({ isActive }) =>
              `text-center rounded-full ${
                isActive
                  ? "bg-purple-500 text-white rounded-full"
                  : "text-gray-700 border"
              }`
            }
            to=""
          >
            All
          </NavLink>
          <NavLink
            to={`laptops`}
            className={({ isActive }) =>
              `text-center rounded-full ${
                isActive
                  ? "bg-purple-500 text-white rounded-full"
                  : "text-gray-700 border"
              }`
            }
          >
            Laptops
          </NavLink>
          <NavLink
            to={`smartphones`}
            className={({ isActive }) =>
              `text-center rounded-full ${
                isActive
                  ? "bg-purple-500 text-white rounded-full"
                  : "text-gray-700 border"
              }`
            }
          >
            Smartphones
          </NavLink>
          <NavLink
            to={`accessories`}
            className={({ isActive }) =>
              `text-center rounded-full ${
                isActive
                  ? "bg-purple-500 text-white rounded-full"
                  : "text-gray-700 border"
              }`
            }
          >
            Accessories
          </NavLink>
          <NavLink
            to={`iphone`}
            className={({ isActive }) =>
              `text-center rounded-full ${
                isActive
                  ? "bg-purple-500 text-white rounded-full"
                  : "text-gray-700 border"
              }`
            }
          >
            Iphone
          </NavLink>
          <NavLink
            to={`macbook`}
            className={({ isActive }) =>
              `text-center rounded-full ${
                isActive
                  ? "bg-purple-500 text-white rounded-full"
                  : "text-gray-700 border"
              }`
            }
          >
            MacBook
          </NavLink>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default GadgetContainer;
