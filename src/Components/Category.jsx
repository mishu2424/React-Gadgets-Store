import { useEffect, useState } from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Gadget from "./Gadget";
import LoadingSpinner from "./LoadingSpinner";
import { BeatLoader } from "react-spinners";

const Category = () => {
  const {category} = useParams();
  // console.log(params.category);
  const gadgets = useLoaderData();
  const [items, setItems] = useState([]);
  const navigation = useNavigation();
  const [loading, isLoading] = useState(false);
  // console.log(gadgets);
  useEffect(() => {
    isLoading(true);
    const newData = gadgets.filter(
      (det) => det.category.toLowerCase() === category.toLowerCase()
    );
    setTimeout(() => {
      setItems(newData);
      isLoading(false);
    }, 2000);
  }, [gadgets,category]);
  return (
    <div className="my-3">
      {loading === true ? (
        <BeatLoader
          className="mx-auto absolute left-[45%] md:left-1/2"
          color="red"
          size={20}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
          {items.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
          ))}
        </div>
      )}

      {!loading && items.length === 0 && (
        <div className="h-fit text-center space-y-2">
          <h2 className="text-red-500 text-7xl">Nothing Found !!!</h2>
        </div>
      )}

      {navigation.state === "loading" && <LoadingSpinner></LoadingSpinner>}
    </div>
  );
};

export default Category;
