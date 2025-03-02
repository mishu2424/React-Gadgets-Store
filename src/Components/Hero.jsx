const Hero = ({ address, message, des }) => {
  return (
    <section className="w-[90vw] mx-auto bg-[#9538E2] text-white rounded-b-md py-16">
      <div className="container mx-auto flex flex-col py-16 text-center md:py-32  xl:max-w-2xl space-y-3">
        <h1 className="lg:text-4xl font-bold leading-none text-xl">
          {message}
        </h1>
        <p className="text-base">{des}</p>
        {address === "home" && (
          <div className="flex flex-wrap justify-center">
            <button
              className="px-8 py-3 m-2 text-lg font-bold rounded-full bg-white text-violet-700 cursor-pointer hover:bg-violet-800 hover:text-white duration-150"
              fdprocessedid="jeii8a"
            >
              Shop Now
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
