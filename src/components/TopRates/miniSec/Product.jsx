import { useDispatch } from "react-redux";
import { AddProduct } from "../../../Store/Slices/Slice";
import { toast } from "react-toastify";
const Product = (props) => {
  const dis = useDispatch();
  return (
    <>
      <div
        className={`${props.obj.style} py-5 px-10 max-w-[320px]  h-[100%] w-[100%] rounded-md  `}
      >
        <div className="gap-2 flex flex-col items-center">
          <h1 className="text-[1rem] font-extrabold text-slate-200">
            Nike Air Low Premium
          </h1>
          <h1 className="text-white">MEN Running Shoes</h1>
          <div className="flex gap-5">
            <span>
              <h1 className="text-white max-[425px]:text-[0.7rem] sm:text-md font-medium">
                ${props.obj.sellPrice}
              </h1>{" "}
            </span>
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
                data-slot="icon"
                className="icon-style w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              <h1 className="text-[0.7rem] sm:text-[1rem] font-normal text-slate-200">
                4
              </h1>
            </span>
          </div>
          <div className="flex gap-5">
            <span>
              <button
                type="button"
                className=" blur-effect-theme bg-white/80 rounded-md button-theme p-0.5 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  data-slot="icon"
                  className="icon-style false sm:h-[27px] h-[20px] "
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </span>
            <span>
              <button
                type="button"
                className="bg-white/90 blur-effect-theme button-theme px-1 sm:px-2 py-1 shadow shadow-slate-200 sm:text-[0.8rem] rounded-md text-[0.5rem] text-black"
                onClick={() => {
                  dis(
                    AddProduct({
                      img: props.obj.img,
                      name: props.obj.name,
                      style: props.obj.style,
                      sellPrice: props.obj.sellPrice,
                    })
                  );
                  toast.success("Added To Cart");
                }}
              >
                Buy Now
              </button>
            </span>
          </div>
        </div>
        <img
          src={props.obj.img}
          className="h-[150px] py-1 duration-700 ease-in-out hover:rotate-[-15deg] "
        />
      </div>
    </>
  );
};

export default Product;
