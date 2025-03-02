import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart, removeItem } from "../utility/localStorage";
import Cart from "./Cart";

const Wishes = () => {
    const [items, setItems] = useState([])
    const gadgets=useLoaderData();
    console.log(gadgets,items);
    useEffect(()=>{
        const getLists=getStoredCart('wishList');
        const newData=[];
        getLists.forEach(id => {
                const foundItem=gadgets.find(gadget=>gadget.product_id === id);
                newData.push(foundItem);
        });
        setItems(newData);
    },[])

    const handleRemoveFromWishList=(id,list)=>{
        const remainingData = items.filter(item=>item.product_id !== id);
        setItems(remainingData);
        removeItem(id,list);
    }
    return (
        <div className="w-[90vw] mx-auto space-y-3 mt-4">
            <h3 className="font-bold">WishList</h3>
            <div className="w-[90vw] mx-auto space-y-3 mt-4">
            {
                items.map(cart=><Cart button={true} key={cart.product_id} cart={cart} handleRemoveFromWishList={handleRemoveFromWishList}></Cart>)
            }
        </div>
        </div>
    );
};

export default Wishes;