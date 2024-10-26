import img from "../../assets/asset 27.png";

const Highlight2 = () => {
  return (
    <>
      <div className="w-[100%] my-[70px]  flex  flex-row-reverse max-[1244px]:flex-col-reverse px-4 sm:px-[100px] justify-between ">
        <div className="">
          <img
            src={img}
            className="w-auto lg:h-[42vh] pt-1 md:h-[29vh] max-[1244px]:mx-auto sm:h-[18vh] h-[19vh] transitions-theme duration-700 ease-in-out hover:rotate-0 rotate-[25deg]  cursor-pointer object-fill"
          />
        </div>
        <div className="max-[1244px]:max-w-[100%] max-[1244px]:text-center max-[1244px]:py-10  max-w-[40%] ">
          <h1 className=" text-[2rem] text-blue-700 font-bold max-[683px]:text-[1.3rem]">
            FEATURED
          </h1>
          <h1 className="text-black text-[3rem] font-extrabold max-[683px]:text-[2rem] max-[366px]:text-[1.7rem]">
            NIKE SNEAKERS AIR LANCING SHOES
          </h1>
          <h1 className="text-black max-[683px]:text-[0.8rem] text-[1rem] py-3 font-medium">
            The radiance lives on Nike Sneakers Air Lancing Shoes, the basket
            ball OG that puts a fresh spin on what you know best: durably
            stitched overlays, clean finishes and the perfect amount of flash to
            make you shine.
          </h1>
          <button className=" text-slate-200 bg-black rounded-md shadow-black shadow-md font-semibold  px-5 py-1">
            Explore More
          </button>
        </div>
      </div>
    </>
  );
};

export default Highlight2;
