import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Gadget from "./Gadget";

const Smartphones = () => {
    const [phones, setPhones] = useState([]);
    const gadgets = useLoaderData();
    useEffect(()=>{
        const newData=gadgets.filter(product=>product.category==="Smartphones")
        setPhones(newData);
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            {
                phones.map(gadget=><Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
            }
        </div>
    );
};

export default Smartphones;