import { useEffect, useState } from "react";
import nike from "../../assets/asset 0.png";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

const Header = () => {
  const [hs, shs] = useState(0);
  const hsfun = () => shs(!hs);
  const data = useSelector((state) => state.product);

  const len = data.cartitems.length;

  return (
    <>
      {hs ? <Cart fun={hsfun} /> : null}
      <div className="flex animate__animated animate__fadeInDown justify-between w-[100%] z-10 py-4 px-4 md:py-8 md:px-4 lg:py-7 lg:px-20 absolute  ">
        <div className="w-[50px] sm:w-[65px]">
          <img src={nike} />
        </div>
        <div className="flex   gap-2">
          <span className="w-[20px] sm:w-[25px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#1976D2"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <span className="w-[20px] sm:w-[25px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden="true"
              className="icon-style false "
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </span>
          <button className="w-[20px] sm:w-[25px]" onClick={hsfun}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden="true"
              className="icon-style false "
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="bg-white px-1.5 ml-[-2px] text-[0.7rem] rounded-full absolute mt-[-10px]">
              {len}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
