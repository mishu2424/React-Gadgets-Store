import { useEffect, useState } from "react";
import { useLoaderData} from "react-router-dom";

const Iphone = () => {
    const gadgets = useLoaderData();
    console.log(gadgets);
    const [laptops, setLaptops] = useState([]);
      useEffect(() => {
        const newData = gadgets.filter((det) => det.category === "iphone");
        setLaptops(newData);
      }, []);

    console.log(laptops.length)
    return (
        <div>
            {laptops.length<=0 && <div className="h-fit text-center space-y-2">
                <h2 className="text-red-500 text-7xl">Nothing Found !!!</h2>
            </div>}
        </div>
    );
};

export default Iphone;