import { useNavigate } from "react-router-dom";

const Hero = ({ address, message, des }) => {
  const navigate = useNavigate();
  const handleShopNow=()=>{
    navigate("/", { state: { section: "gadgets" } }); // Navigate with state
  }
  return (
    <section className={`w-[90vw] mx-auto bg-[#9538E2] text-white rounded-b-md py-16 ${address==='stats' && 'py-10 h-[320px] rounded-t-md'}`}>
      <div className={`container mx-auto flex flex-col  text-center xl:max-w-2xl space-y-3 ${address!=='stats' && 'md:py-32 py-16'}`}>
        <h1 className="lg:text-4xl font-bold leading-none text-base">
          {message}
        </h1>
        <p className="text-xs md:text-base px-2">{des}</p>
        {address === "home" && (
          <div className="flex flex-wrap justify-center">
            <button
            onClick={handleShopNow}
              className="px-8 py-3 m-2 text-lg font-bold rounded-full bg-white text-violet-700 cursor-pointer hover:bg-violet-800 hover:text-white duration-150"
              fdprocessedid="jeii8a"
            >
              <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient hover:text-white">Shop Now</span>
            </button>
            
          </div>
        )}
        {
          address==="dashboard" && <div className="flex flex-wrap justify-center">
          <button
            className="px-8 py-3 m-2 text-lg font-bold rounded-full border border-white text-white cursor-pointer"
            fdprocessedid="jeii8a"
          >
            Cart
          </button>
          <button
            className="px-8 py-3 m-2 text-lg font-bold rounded-full border border-white text-white cursor-pointer"
            fdprocessedid="jeii8a"
          >
            WishList
          </button>
        </div>
        }
      </div>
    </section>
  );
};

export default Hero;
