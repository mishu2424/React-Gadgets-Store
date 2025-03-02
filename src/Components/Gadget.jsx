import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id:id,product_title, product_image, price } = gadget;
  return (
    <div className="w-auto md:max-w-xs rounded-lg border border-gray-200 shadow-md flex flex-col p-2 hover:scale-105 duration-200">
      <img
        src={product_image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-60 bg-gray-500"
      />
      <div className="flex flex-col justify-between space-y-8 flex-grow">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-wide">
            {product_title}
          </h2>
          <p className="">
            Price: {price}
          </p>
        </div>
        <Link
        to={`/gadget/${id}`}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-violet-500 text-[#9538E2] bg-white hover:bg-[#9538E2] hover:text-white hover:border-none duration-150"
          fdprocessedid="j5rt65"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Gadget;
