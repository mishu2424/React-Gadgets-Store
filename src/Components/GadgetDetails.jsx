import { useLoaderData, useParams } from "react-router-dom";
import Hero from "./Hero";
// import ReactStars from "react-rating-stars-component";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { TiShoppingCart } from "react-icons/ti";
import { GiSelfLove } from "react-icons/gi";
import { addToStorage } from "../utility/localStorage";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const GadgetDetails = () => {
  const params = useParams();
  console.log(params.id);
  const gadgets = useLoaderData();
  const selectedGadget = gadgets.find(
    (gadget) => gadget.product_id === Number(params.id)
  );
  console.log(selectedGadget);
  const handleStoredCarts=(id,list)=>{
    addToStorage(id,list);
  }

  useEffect(()=>{
    document.title=`Gadget | ${selectedGadget?.product_title}`
  },[])
  return (
    <div className="">
      <Helmet>
        <title>Gadget | {selectedGadget?.product_title}</title>
      </Helmet>
      <Hero
        message="Product Details"
        des="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      ></Hero>
      <div className="max-w-5xl p-4 shadow-md mx-auto lg:-translate-y-32 bg-white rounded-xl">
        <div className="space-y-4 flex flex-col lg:flex-row gap-4">
          <div className="space-y-2 flex-1">
            <img
              src={selectedGadget?.product_image}
              alt=""
              className="block object-cover object-center w-full lg:w-md h-96 rounded-md bg-gray-500"
            />
          </div>
          <div className="space-y-2 flex-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-violet-400">
                {selectedGadget?.product_title}
              </h3>
            </a>
            <p className="leading-snug font-semibold">
              Price: ${selectedGadget?.price}
            </p>
            <button
              className={`btn btn-xs rounded-full ${
                selectedGadget?.availability
                  ? "border border-green-300 bg-green-300/30 text-green-500"
                  : "border border-red-500 text-red-500 bg-red-300/30"
              }`}
            >
              {selectedGadget?.availability ? "In stock" : "Not available"}
            </button>
            <p className="text-sm font-thin">{selectedGadget?.description}</p>
            <div>
              <h3 className="text-base font-bold">Specification</h3>
              <ol>
                {selectedGadget?.Specification.map((spec, idx) => (
                  <li key={idx} className="text-sm">
                    {idx + 1}. {spec}
                  </li>
                ))}
              </ol>
            </div>
            <h3 className="text-base font-bold">Rating</h3>
            <div className="flex items-center gap-3">
              {/* Steps to add rating stars */}
              {/* 1.npm install prop-types
                    2.npm install react-rating-stars-component
                    3.import ReactStars from "react-rating-stars-component";
                    4.npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
                    5.import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
                    6.import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"; 
                    7.<ReactStars
                      count={5}
                      size={24}
                      isHalf={true}
                      value={selectedGadget.rating || 0}
                      emptyIcon={<FontAwesomeIcon icon={faStar} className="text-gray-400" />} // Empty stars
                      halfIcon={<FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-400" />} // Half stars
                      filledIcon={<FontAwesomeIcon icon={faStar} className="text-yellow-400" />} // Full stars
                      activeColor="#ffd700"
                    />              
                */}
              <ReactStars
                count={5}
                size={16}
                isHalf={true}
                value={selectedGadget.rating || 0}
                emptyIcon={
                  <FontAwesomeIcon icon={faStar} className="text-gray-400" />
                } // Empty stars
                halfIcon={
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-yellow-400"
                  />
                } // Half stars
                filledIcon={
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                } // Full stars
                activeColor="#ffd700"
              />
              <span className="text-sm">{selectedGadget.rating}</span>
            </div>
            <div className="flex items-center gap-3">
                <div onClick={()=>handleStoredCarts(selectedGadget?.product_id, 'cartList')} className="btn rounded-full bg-[#9538E2] text-white hover:text-[#9538E2] hover:bg-white hover:border hover:border-[#9538E2] duration-150">Add To Cart <TiShoppingCart></TiShoppingCart></div>
                <div onClick={()=>handleStoredCarts(selectedGadget?.product_id, 'wishList')} className="bg-white rounded-full border p-2 text-black cursor-pointer"><GiSelfLove></GiSelfLove></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
