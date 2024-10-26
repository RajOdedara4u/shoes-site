import Product from "./Product/Product";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getTotal } from "../../Store/Slices/Slice";
import img1 from "../../assets/asset 1.png";
const Cart = ({ fun }) => {
  const data = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [data]);

  const dis = useDispatch();
  const len = data.cartitems.length;
  return (
    <>
      <div className=" h-[100vh] animate__animated animate__fadeInRight text-black flex z-50 justify-end w-[100vw] fixed backdrop-blur-sm bg-white/30   ">
        <div className="w-[50%]  h-[100vh] max-[709px]:w-[100%]  backdrop-blur-xl bg-white/30 overflow-scroll">
          <div className="bg-white py-2 px-3 sm:px-7  flex justify-between ">
            <span className="flex gap-4 font-bold text-[1.3rem] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                className="w-[35px] "
                id="cart"
              >
                <path d="M63.2 161h164.7c-9.6-7.3-19.3-14.7-28.9-22 4.8 14.6 9.6 29.2 14.4 43.9 11.6 35.1 23.1 70.2 34.7 105.3C262 330.4 276 372.7 289.9 415c12.1 36.7 24.2 73.4 36.2 110.1 5.9 17.8 11.5 35.7 17.6 53.4.1.3.2.5.3.8 4.9 14.9 21 26.1 36.9 21 14.8-4.8 26.2-20.9 21-36.9-4.8-14.6-9.6-29.2-14.4-43.9-11.6-35.1-23.1-70.2-34.7-105.3-13.9-42.3-27.8-84.6-41.8-126.9-12.1-36.7-24.2-73.4-36.2-110.1-5.9-17.8-11.4-35.7-17.6-53.4-.1-.3-.2-.5-.3-.8-4.2-12.6-15.3-22-28.9-22H63.3c-15.7 0-30.7 13.8-30 30 .6 16.3 13.1 30 29.9 30z"></path>
                <path d="M347 556.1c-16.2 28.9-32.5 57.7-48.7 86.6-2.3 4.2-4.7 8.3-7 12.5-11.1 19.7 2.9 45.1 25.9 45.1h458c21.1 0 42.3.4 63.5 0h.9c15.7 0 30.7-13.8 30-30-.7-16.3-13.2-30-30-30h-458c-21.1 0-42.4-.6-63.5 0h-.9c8.6 15 17.3 30.1 25.9 45.1 16.2-28.9 32.5-57.7 48.7-86.6 2.3-4.2 4.7-8.3 7-12.5 7.7-13.7 3.7-33.4-10.8-41-14.2-7.4-32.8-3.8-41 10.8z"></path>
                <circle cx="746.5" cy="824.9" r="68.1"></circle>
                <path d="M658.4 824.9c.4 37.5 23.9 69.9 58.8 83 33 12.4 73.6 1.6 96.1-25.6 23.9-29 28.7-70.3 8.8-102.9-19.6-32.2-57.2-47.9-93.9-40.7-40.5 7.9-69.4 45.6-69.8 86.2-.1 10.5 9.3 20.5 20 20 10.9-.5 19.9-8.8 20-20 0-1.6.1-3.3.2-4.9 0-.7.1-1.4.2-2.1.3-4-.1 1.3-.2 1.2-.7-.4 2.1-9 2.4-9.8.3-.8.9-4.2 1.6-4.4.2-.1-1.8 3.7-.7 1.7.4-.8.8-1.6 1.1-2.4 1.5-3 3.3-5.7 5.1-8.5 1.9-2.9-2.7 3.1.5-.6 1-1.1 2-2.3 3.1-3.4s2.2-2.2 3.3-3.2c.5-.4 1-.9 1.5-1.3.7-.6 3.6-2 1-.9-2.2.9-.6.5.1 0s1.4-1 2.2-1.5c1.1-.7 2.2-1.4 3.4-2 1.5-.9 3.1-1.6 4.7-2.4.5-.3 2.6-1.3 0-.1-3 1.4 1-.3 1.3-.4 2.7-1 5.6-1.8 8.4-2.4.9-.2 1.8-.3 2.7-.5 2.2-.5-1.9.2-1.9.2 1.8 0 3.7-.4 5.5-.4 3.3-.1 6.5 0 9.8.3 3.7.3-3.8-.7.8.2 1.8.3 3.5.8 5.3 1.2 1.5.4 3 .9 4.5 1.4.4.1 2.4.8 2.5.9.1.3-3.7-1.9-1.7-.7 2.8 1.7 5.9 3 8.7 4.8.7.5 1.4 1 2.2 1.5.7.5 2.2.9.1 0-2-.8-.7-.6 0 .1.7.6 1.3 1.1 2 1.7 2.5 2.2 4.6 4.6 6.8 7 3 3.3-1.4-2.3.5.6.8 1.3 1.7 2.5 2.5 3.8.8 1.3 1.6 2.7 2.3 4l.9 1.8c1.9 3.6.4-.3-.1-.5 1.2.4 2.5 7.6 2.9 8.9.3 1.3.6 2.7.9 4 .8 3.8-.1-1.2-.1-1.3.5.5.3 2.8.3 3.4.2 3 .2 6.1 0 9.1-.1.9-.2 1.8-.2 2.8-.1 2-1.2 1.7.2-1.2-.7 1.5-.7 3.7-1.1 5.3-.7 2.8-1.8 5.5-2.6 8.3-.8 2.5 1.8-3.4.5-1.1-.3.5-.6 1.2-.8 1.8-.8 1.6-1.6 3.1-2.5 4.6-.8 1.3-1.6 2.6-2.5 3.9-2.7 4.1 1.9-2-.4.7-2.2 2.5-4.3 4.9-6.8 7.1-.4.4-2.8 3-3.5 3 0 0 4.1-2.8.9-.8-.6.4-1.1.7-1.6 1.1-2.8 1.8-5.7 3.3-8.6 4.8-3.1 1.6 3.6-1.2-.7.3-1.5.5-2.9 1-4.4 1.5-1.5.4-3 .8-4.6 1.2-.7.1-1.3.3-2 .4-4.4 1 3.2-.2.6 0-3.3.3-6.5.5-9.8.4-1.6 0-3.2-.2-4.9-.3-.6 0-3-.3-.1 0 3.3.3-.7-.2-1.4-.3-3.5-.7-6.9-1.8-10.3-3-.6-.2-2.6-1.2-.1 0 2.9 1.4-.6-.3-1.2-.6-1.6-.8-3.1-1.6-4.6-2.5-1.5-.9-2.9-1.9-4.4-2.9-2.4-1.5.3.8.9.8-.4 0-1.7-1.4-2-1.7-2.6-2.3-5.1-4.7-7.4-7.4 0 0-1.7-1.7-1.7-2 0 .4 2.4 3.4.8.9-1-1.5-2-2.9-2.9-4.4-1-1.7-1.9-3.5-2.8-5.2-2.1-4.1 1 3.2-.6-1.3-1.2-3.4-2.2-6.8-2.9-10.4-.1-.6-.1-1.5-.4-2 1.5 3.3.3 2.8.1.5-.2-2.1-.3-4.2-.3-6.3-.1-10.5-9.1-20.5-20-20-11.2.3-20.6 8.7-20.5 19.9z"></path>
                <circle cx="401.8" cy="824.9" r="68.1"></circle>
                <path d="M313.7 824.9c.4 37.5 23.9 69.9 58.8 83 33 12.4 73.6 1.6 96.1-25.6 23.9-29 28.7-70.3 8.8-102.9-19.6-32.2-57.2-47.9-93.9-40.7-40.6 7.9-69.4 45.6-69.8 86.2-.1 10.5 9.3 20.5 20 20 10.9-.5 19.9-8.8 20-20 0-1.6.1-3.3.2-4.9 0-.7.1-1.4.2-2.1.3-4-.1 1.3-.2 1.2-.7-.4 2.1-9 2.4-9.8.3-.8.9-4.2 1.6-4.4.2-.1-1.8 3.7-.7 1.7.4-.8.8-1.6 1.1-2.4 1.5-3 3.3-5.7 5.1-8.5 1.9-2.9-2.7 3.1.5-.6 1-1.1 2-2.3 3.1-3.4s2.2-2.2 3.3-3.2c.5-.4 1-.9 1.5-1.3.7-.6 3.6-2 1-.9-2.2.9-.6.5.1 0s1.4-1 2.2-1.5c1.1-.7 2.2-1.4 3.4-2 1.5-.9 3.1-1.6 4.7-2.4.5-.3 2.6-1.3 0-.1-3 1.4 1-.3 1.3-.4 2.7-1 5.6-1.8 8.4-2.4.9-.2 1.8-.3 2.7-.5 2.2-.5-1.9.2-1.9.2 1.8 0 3.7-.4 5.5-.4 3.3-.1 6.5 0 9.8.3 3.7.3-3.8-.7.8.2 1.8.3 3.5.8 5.3 1.2 1.5.4 3 .9 4.5 1.4.4.1 2.4.8 2.5.9.1.3-3.7-1.9-1.7-.7 2.8 1.7 5.9 3 8.7 4.8.7.5 1.4 1 2.2 1.5.7.5 2.2.9.1 0-2-.8-.7-.6 0 .1.7.6 1.3 1.1 2 1.7 2.5 2.2 4.6 4.6 6.8 7 3 3.3-1.4-2.3.5.6.8 1.3 1.7 2.5 2.5 3.8.8 1.3 1.6 2.7 2.3 4l.9 1.8c1.9 3.6.4-.3-.1-.5 1.2.4 2.5 7.6 2.9 8.9.3 1.3.6 2.7.9 4 .8 3.8-.1-1.2-.1-1.3.5.5.3 2.8.3 3.4.2 3 .2 6.1 0 9.1-.1.9-.2 1.8-.2 2.8-.1 2-1.2 1.7.2-1.2-.7 1.5-.7 3.7-1.1 5.3-.7 2.8-1.8 5.5-2.6 8.3-.8 2.5 1.8-3.4.5-1.1-.3.5-.6 1.2-.8 1.8-.8 1.6-1.6 3.1-2.5 4.6-.8 1.3-1.6 2.6-2.5 3.9-2.7 4.1 1.9-2-.4.7-2.2 2.5-4.3 4.9-6.8 7.1-.4.4-2.8 3-3.5 3 0 0 4.1-2.8.9-.8-.6.4-1.1.7-1.6 1.1-2.8 1.8-5.7 3.3-8.6 4.8-3.1 1.6 3.6-1.2-.7.3-1.5.5-2.9 1-4.4 1.5-1.5.4-3 .8-4.6 1.2-.7.1-1.3.3-2 .4-4.4 1 3.2-.2.6 0-3.3.3-6.5.5-9.8.4-1.6 0-3.2-.2-4.9-.3-.6 0-3-.3-.1 0 3.3.3-.7-.2-1.4-.3-3.5-.7-6.9-1.8-10.3-3-.6-.2-2.6-1.2-.1 0 2.9 1.4-.6-.3-1.2-.6-1.6-.8-3.1-1.6-4.6-2.5-1.5-.9-2.9-1.9-4.4-2.9-2.4-1.5.3.8.9.8-.4 0-1.7-1.4-2-1.7-2.6-2.3-5.1-4.7-7.4-7.4 0 0-1.7-1.7-1.7-2 0 .4 2.4 3.4.8.9-1-1.5-2-2.9-2.9-4.4-1-1.7-1.9-3.5-2.8-5.2-2.1-4.1 1 3.2-.6-1.3-1.2-3.4-2.2-6.8-2.9-10.4-.1-.6-.1-1.5-.4-2 1.5 3.3.3 2.8.1.5-.2-2.1-.3-4.2-.3-6.3-.1-10.5-9.1-20.5-20-20-11.3.3-20.7 8.7-20.5 19.9zM960.8 258 839.4 571H372.9L269.7 258z"></path>
                <path d="M941.5 252.5c-13.7 35.3-27.3 70.6-41 105.9-21.8 56.3-43.6 112.5-65.3 168.8-5 12.9-10 25.9-15 38.8 6.4-4.9 12.9-9.8 19.3-14.7H430.4c-18.8 0-37.8-.8-56.7 0h-.8c6.4 4.9 12.9 9.8 19.3 14.7-11.7-35.5-23.3-70.9-35-106.4-18.5-56.1-37-112.2-55.4-168.4-4.3-12.9-8.5-25.8-12.8-38.8-6.4 8.4-12.9 16.9-19.3 25.3H932.8c9 0 18 .2 26.9 0h1.2c10.5 0 20.5-9.2 20-20s-8.8-20-20-20H297.8c-9 0-18-.2-26.9 0h-1.2c-12.5 0-23.4 12.9-19.3 25.3 11.7 35.5 23.3 70.9 35 106.4 18.5 56.1 37 112.2 55.4 168.4 4.3 12.9 8.5 25.8 12.8 38.8 2.8 8.4 10.2 14.7 19.3 14.7H782c18.8 0 37.8.7 56.7 0h.8c9.5 0 16.1-6.4 19.3-14.7 13.7-35.3 27.3-70.6 41-105.9 21.8-56.3 43.6-112.5 65.3-168.8 5-12.9 10-25.9 15-38.8 3.8-9.8-4.2-22.4-14-24.6-11.5-2.6-20.6 3.5-24.6 14z"></path>
              </svg>
              My Cart
            </span>

            <button onClick={fun}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="w-[40px]"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1"
                  x1="9.858"
                  x2="38.142"
                  y1="9.858"
                  y2="38.142"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#f44f5a"></stop>
                  <stop offset=".443" stopColor="#ee3d4a"></stop>
                  <stop offset="1" stopColor="#e52030"></stop>
                </linearGradient>
                <path
                  fill="url(#wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1)"
                  d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                ></path>
                <path
                  d="M33.192,28.95L28.243,24l4.95-4.95c0.781-0.781,0.781-2.047,0-2.828l-1.414-1.414	c-0.781-0.781-2.047-0.781-2.828,0L24,19.757l-4.95-4.95c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l4.95,4.95l-4.95,4.95c-0.781,0.781-0.781,2.047,0,2.828l1.414,1.414	c0.781,0.781,2.047,0.781,2.828,0l4.95-4.95l4.95,4.95c0.781,0.781,2.047,0.781,2.828,0l1.414-1.414	C33.973,30.997,33.973,29.731,33.192,28.95z"
                  opacity=".05"
                ></path>
                <path
                  d="M32.839,29.303L27.536,24l5.303-5.303c0.586-0.586,0.586-1.536,0-2.121l-1.414-1.414	c-0.586-0.586-1.536-0.586-2.121,0L24,20.464l-5.303-5.303c-0.586-0.586-1.536-0.586-2.121,0l-1.414,1.414	c-0.586,0.586-0.586,1.536,0,2.121L20.464,24l-5.303,5.303c-0.586,0.586-0.586,1.536,0,2.121l1.414,1.414	c0.586,0.586,1.536,0.586,2.121,0L24,27.536l5.303,5.303c0.586,0.586,1.536,0.586,2.121,0l1.414-1.414	C33.425,30.839,33.425,29.889,32.839,29.303z"
                  opacity=".07"
                ></path>
                <path
                  fill="#fff"
                  d="M31.071,15.515l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L18.343,32.485	c-0.391,0.391-1.024,0.391-1.414,0l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414l14.142-14.142	C30.047,15.124,30.681,15.124,31.071,15.515z"
                ></path>
                <path
                  fill="#fff"
                  d="M32.485,31.071l-1.414,1.414c-0.391,0.391-1.024,0.391-1.414,0L15.515,18.343	c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0l14.142,14.142	C32.876,30.047,32.876,30.681,32.485,31.071z"
                ></path>
              </svg>
            </button>
          </div>
          {len != 0 ? (
            <div>
              <div className="w-[100%]">
                <ul className="py-10 flex flex-col overflow-scroll-y animate__animated animate__fadeInUp items-center w-[100%]  gap-10">
                  {data.cartitems.map((v, indx) => {
                    return (
                      <Product
                        key={indx}
                        cartQuantity={v.cartQuantity}
                        img={v.img}
                        name={v.name}
                        style={v.style}
                        sellPrice2={v.sellPrice}
                      />
                    );
                  })}
                </ul>
              </div>
              <div className="w-[100%] flex flex-col  bottom-0 font-semibold">
                <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                  <div className="space-y-4 rounded-lg border border-gray-200  p-4 shadow-sm sm:p-6">
                    <p className="text-xl font-semibold text-gray-900   ">
                      Order summary
                    </p>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <dl className="flex items-center justify-between gap-4">
                          <dt className="text-base font-normal text-black">
                            Total Price
                          </dt>
                          <dd className="text-base font-medium text-gray-900   ">
                            ${data.TotalAmount}
                          </dd>
                        </dl>

                        <dl className="flex items-center justify-between gap-4">
                          <dt className="text-base font-normal text-black">
                            Total Items
                          </dt>
                          <dd className="text-base font-medium text-gray-900   ">
                            {data.TotalQuantity}
                          </dd>
                        </dl>

                        <dl className="flex items-center justify-between gap-4">
                          <dt className="text-base font-normal text-black ">
                            On first order you will get 10% discount
                          </dt>
                        </dl>
                      </div>

                      <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                        <dt className="text-base font-bold text-gray-900   ">
                          Total
                        </dt>
                        <dd className="text-base font-bold text-gray-900   ">
                          ${data.TotalAmount}
                        </dd>
                      </dl>
                    </div>
                    <button className="flex w-full items-center justify-center rounded-lg bg-black  px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-primary-300  dark:focus:ring-primary-800">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-[100%] flex justify-center items-center w-[100%]">
              <img src={img1} className="w-[50%] lg:w-[30%]" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
