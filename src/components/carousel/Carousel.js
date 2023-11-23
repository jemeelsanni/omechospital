import React from "react";
import Slider from "react-slick";
import data1 from "../../images/investigationRoom1.jpg";
import data2 from "../../images/surgeryRoom.jpg";
import data3 from "../../images/investigationRoom2.jpg";
const Carouselcont = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="lg:h-[45rem] h-[20rem] w-full">
      <Slider {...settings}>
        <div className="lg:h-[45rem] h-[20rem] w-full">
          <img src={data1} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="lg:h-[45rem] h-[20rem] w-full">
          <img src={data2} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="lg:h-[45rem] h-[20rem] w-full">
          <img src={data3} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="lg:h-[45rem] h-[20rem] w-full">
          <img src={data2} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="lg:h-[45rem] h-[20rem] w-full">
          <img src={data1} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="lg:h-[45rem] h-[20rem] w-full">
          <img src={data3} alt="" className="h-full w-full object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default Carouselcont;
