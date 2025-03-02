import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Gadget from "./Gadget";

const Macbook = () => {
  const gadgets = useLoaderData();
  const [Macs, setMac] = useState([]);
  console.log(gadgets);
  useEffect(() => {
    const newData = gadgets.filter((gadget) =>
      gadget.product_title.includes("MacBook")
    );
    setMac(newData);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto">
      {Macs.map((gadget) => (
        <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
      ))}
    </div>
  );
};

export default Macbook;
