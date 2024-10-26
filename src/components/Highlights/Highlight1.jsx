import img from "../../assets/asset 14.png";

const Highlight1 = () => {
  return (
    <>
      <div className="w-[100%] my-[50px] sm:my-[70px]  flex max-[1244px]:flex-col-reverse px-4 sm:px-[100px] justify-between ">
        <div className="">
          <img
            src={img}
            className="w-auto lg:h-[42vh] pt-1 md:h-[26vh] max-[1244px]:mx-auto sm:h-[18vh] h-[15vh] transitions-theme duration-700 ease-in-out hover:rotate-[-15deg]  cursor-pointer object-fill"
          />
        </div>
        <div className="max-[1244px]:max-w-[100%] max-[1244px]:text-center max-[1244px]:py-10  max-w-[40%] ">
          <h1 className=" text-[2rem] text-blue-700 font-bold max-[683px]:text-[1.3rem]">
            HIGHLIGHTS
          </h1>
          <h1 className="text-black text-[3rem] font-extrabold max-[683px]:text-[2rem] max-[366px]:text-[1.7rem]">
            NIKE AIR WITH LIMITLESS CHOICES
          </h1>
          <h1 className="text-black max-[683px]:text-[0.8rem] text-[1rem] py-3 font-medium">
            Our Purpose is to move the world forward. We take action by building
            community, protecting our planet and increasing access to sport.
          </h1>
          <button className=" text-slate-200 bg-black rounded-md shadow-black shadow-md font-semibold  px-5 py-1">
            Explore More
          </button>
        </div>
      </div>
    </>
  );
};

export default Highlight1;
