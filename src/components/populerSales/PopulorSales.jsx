import img1 from "../../assets/asset 11.png";
import img2 from "../../assets/asset 12.png";
import img3 from "../../assets/asset 13.png";
import PopulerSell from "./miniSec/PopulerSell";
const PopulorSales = () => {
  const data = [
    {
      sellPrice: 300,
      img: img1,
      name: "Nike Addapt BB 2.0",
      rating: "4.9",
      price: "$200",
      style: " bg-gradient-to-b from-blue-600 to-blue-500  shadow-blue-500    ",
    },
    {
      sellPrice: 300,
      img: img2,
      name: "Nike Martine Rose",
      rating: "4.5",
      style: " bg-gradient-to-b from-red-500 to-rose-500  shadow-rose-500",
    },
    {
      sellPrice: 300,
      img: img3,
      name: "Nike Smart Shoe 2.0",
      rating: "5+",
      style:
        "bg-gradient-to-b from-violet-500 to-indigo-500 shadow-violet-500     ",
    },
  ];
  return (
    <>
      <div className=" mt-[-25%] sm:mt-[-10%] lg:mt-[-5%]   w-[100%]">
        <h1 className="sm:pl-20 animate__animated animate__fadeInUp pl-4 max-[430px]:text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]  font-bold font-serif py-3">
          Popular Sales
        </h1>
        <div className="flex    justify-center flex-wrap">
          {data.map((obj, indx) => {
            return <PopulerSell key={indx} index={indx} obj={obj} />;
          })}{" "}
        </div>{" "}
      </div>
    </>
  );
};
export default PopulorSales;
