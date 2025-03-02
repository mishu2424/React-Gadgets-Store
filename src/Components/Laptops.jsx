import { useEffect, useState } from "react";
import Gadget from "./Gadget";
import { useLoaderData, useLocation, useNavigation } from "react-router-dom";

const Laptops = () => {
  const navigation=useNavigation();
  const [laptops, setLaptops] = useState([]);
  const location = useLocation();
  console.log(location) 
  const data = useLoaderData();
  useEffect(() => {
    const newData = data.filter((det) => det.category === "Laptops");
    setLaptops(newData);
  }, []);
  //   console.log(laptops);
  if (navigation.state === "loading") return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
      {laptops.map((gadget) => (
        <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
      ))}
    </div>
  );
};

export default Laptops;
