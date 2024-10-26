import data from "./Data";
import Product from "./miniSec/Product";
const TopRates = () => {
  return (
    <>
      <h1 className="sm:pl-20 pl-4 max-[430px]:text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]  lg:text-[3rem] font-bold font-serif pt-10 pb-5">
        Top Rated Sales
      </h1>
      <div className=" w-[100%] gap-10 justify-center   flex flex-wrap ">
        {data.map((obj, indx) => (
          <Product key={indx} obj={obj} />
        ))}
      </div>
    </>
  );
};

export default TopRates;
