import { MdOutlineCancel } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { addToStorage } from "../utility/localStorage";
import { useState } from "react";
const Cart = ({cart, handleRemoveFromCartList, handleRemoveFromWishList, button}) => {
    const {product_id, product_image, product_title, description, price, rating}=cart;
    const [disable, setDisable]=useState(false);
    const handleStoredCarts=(id,list)=>{
      addToStorage(id,list);
    }
  return (
    <div className="card card-side bg-base-100 shadow-sm p-2 space-x-3">
      <figure>
        <img
        className="w-[200px] h-40 rounded-md"
          src={product_image}
          alt={product_title}
        />
      </figure>
      <div className="flex justify-between flex-grow">
        <div className="space-y-2"><h2 className="card-title">{product_title}</h2>
        <p className="">{description}</p>
        <p className="font-bold">Price: ${price}</p>
        <p className="font-bold">Rating: <span className="font-normal">{rating}</span></p>
        {button && <button onClick={()=>{
          handleStoredCarts(product_id, 'cartList');
          setDisable(true);
          }} disabled={disable} className="btn rounded-full bg-[#9538E2] text-white hover:text-[#9538E2] hover:bg-white hover:border hover:border-[#9538E2] duration-150">Add To Cart <TiShoppingCart></TiShoppingCart></button>}
        </div>
        <div className="">
          {button ? <button onClick={()=>handleRemoveFromWishList(product_id,'wishList')} className=" rounded-full text-red-500 cursor-pointer"><MdOutlineCancel size={24}></MdOutlineCancel></button>: <button onClick={()=>handleRemoveFromCartList(product_id,'cartList')} className=" rounded-full text-red-500 cursor-pointer"><MdOutlineCancel size={24}></MdOutlineCancel></button>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
