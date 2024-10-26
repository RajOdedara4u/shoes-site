import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Storie from "./MiniCom/Storie";
import data from "./data";
const Stories = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50px",
          background: "black",
          height: "50px",
          width: "50px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50px",
          background: "black",
          height: "50px",
          width: "50px",
          zIndex: 10,
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h1 className="sm:pl-20 pl-4 max-[430px]:text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]  lg:text-[3rem] font-bold font-serif pt-10 pb-5">
        Top Stories
      </h1>
      <div className=" flex flex-col  justify-center ">
        <div className="  mx-7 lg:mx-20 bg-white ">
          <Slider {...settings}>
            {data.map((v, indx) => (
              <Storie obj={v} key={indx} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Stories;
