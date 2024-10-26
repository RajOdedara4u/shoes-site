import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";
import {
  AddProduct,
  decreaseCart,
  DelateProduct,
} from "../../../Store/Slices/Slice";
const Product = ({ cartQuantity, img, name, style, sellPrice2 }) => {
  const dispatch = useDispatch();
  const [sellPrice] = useState(parseInt(cartQuantity));
  const [productPrice, setProductPrice] = useState(sellPrice * cartQuantity);

  useEffect(() => {
    setProductPrice(sellPrice * cartQuantity);
  }, [cartQuantity, sellPrice]);

  const handleRemoveFromCart = () => {
    dispatch(DelateProduct(name));
    toast.success("Removed");
  };

  const decreaseItem = () => {
    dispatch(decreaseCart(name));
  };

  const increaseItem = () => {
    dispatch(AddProduct({ name: name }));
  };

  return (
    <>
      <li className="py-5  max-h-[128px]  lg:max-w-[562px] max-w-[280px] px-1 lg:px-10 justify-between   h-[100%] w-[100%] rounded-md flex  flex-row-reverse  ">
        <div className="flex flex-col  justify-between py-1">
          <span>
            <h1 className="text-black  px-1 rounded-md text-[0.7rem] font-medium sm:text-[0.9rem] lg:text-[1rem]">
              ${cartQuantity * sellPrice2}
            </h1>
          </span>
          <button
            onClick={handleRemoveFromCart}
            className="flex bg-black justify-center items-center rounded-md py-1 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              fill="white"
              className="h-[15px] sm:h-[20px]"
              viewBox="0 0 30 30"
            >
              <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
            </svg>
          </button>
        </div>
        <div className=" flex flex-col items-center">
          <h1 className="text-[0.6rem] lg:text-[1rem] font-extrabold text-black">
            {name}
          </h1>
          <h1 className="text-black py-2 text-[0.5rem] lg:text-[0.9rem]">
            MEN Running Shoes
          </h1>
          <div className=" flex gap-2 lg:gap-5  items-center">
            <button
              className="   bg-white text-slate-200 rounded-full"
              onClick={increaseItem}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="h-[18px] lg:h-[25px]"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path>
              </svg>
            </button>
            <span className="px-2  bg-black text-slate-200 rounded-full">
              {cartQuantity}
            </span>
            <button
              className="bg-white overflow-hidden  rounded-full"
              onClick={decreaseItem}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[18px] w-[18px] lg:h-[24px] lg:w-[24px]"
                id="minus"
                viewBox="0 0 25 25"
              >
                <path
                  fill="black"
                  fillRule="evenodd"
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          className={` ${style}  max-w-[120px]  lg:max-w-[168px]  justify-center items-center flex rounded-md lg:py-3`}
        >
          <img
            src={img}
            className=" py-1 duration-700 ease-in-out hover:rotate-[-15deg] w-[86%]  lg:w-[90%]"
          />
        </div>
      </li>
    </>
  );
};

export default Product;
