import React from "react";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { useState } from "react";

const ScrollAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "https://img.freepik.com/premium-photo/coffee-cup-sits-table-coffee-shop_865967-26031.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
    },

    {
      url: "https://cdn.homedit.com/wp-content/uploads/2019/05/A-Modern-Colombian-Coffee-Shop-2.jpg",
    },
  ];

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const nextIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };

  const nextSlide = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[1400px] top-[400px] h-[700px] w-full m-auto py-16 px-4 relative group ">
      <h1 className="text-2xl mb-5 text-[#604233] ">Our Restaurant</h1>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      {/* Left Arrow */}
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] text-white p-2 cursor-pointer left-5 text-2xl bg-black/20 rounded-full">
        <HiOutlineArrowSmallLeft onClick={prevSlide} size={30} />
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] text-white -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 cursor-pointer bg-black/20 rounded-full ">
        <HiOutlineArrowSmallRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default ScrollAnimation;
