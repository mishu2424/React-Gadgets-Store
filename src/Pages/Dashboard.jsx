import { Link, Outlet, useLocation } from "react-router-dom";
import Hero from "../Components/Hero";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  useEffect(()=>{
    document.title='Dashboard'
  },[])
  const location = useLocation();
  useEffect(()=>{
    if(location.state?.section==='wishlist'){
      setTabIndex(1);
      console.log('entered dash')
    }else if(location.state?.section==='cartlist'){
      setTabIndex(0);
    }
  },[location])
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard</title>
      </Helmet>
      <section className="w-[90vw] mx-auto bg-[#9538E2] text-white rounded-md py-10">
        {/* <Hero address='dashboard' message='Dashboard' des='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Hero> */}
        <div className="container mx-auto flex flex-col py-10 text-center md:py-10 xl:max-w-2xl space-y-3">
          <h1 className="lg:text-4xl font-bold leading-none text-xl">
            Dashboard
          </h1>
          <p className="text-base">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex flex-wrap justify-center">
            <Link
              onClick={() => setTabIndex(0)}
              to=""
              className={`${
                tabIndex === 0 && "bg-white text-[#9538E2] "
              } px-8 py-3 m-2 text-lg font-bold rounded-full border border-white  cursor-pointer hover:bg-white hover:text-[#9538E2] hover:border-[#9538E2] duration-150`}
              fdprocessedid="jeii8a"
            >
              Cart
            </Link>
            <Link
              onClick={() => setTabIndex(1)}
              to={`wish`}
              className={`${
                tabIndex === 1 && "bg-white text-[#9538E2]"
              } px-8 py-3 m-2 text-lg font-bold rounded-full border border-white  cursor-pointer hover:bg-white hover:text-[#9538E2] hover:border-[#9538E2] duration-150`}
              fdprocessedid="jeii8a"
            >
              WishList
            </Link>
          </div>
        </div>
      </section>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
