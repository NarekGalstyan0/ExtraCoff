import React from "react";
import img from "../../assets/CoffeeAssets/CoffeeX.webp";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <>
      <div className=" mt-[110px]  h-full  m-auto " id="/">
        <div className="absolute mt-[100px]   top-[30px] brightness-10  w-full">
          <img className="w-[100%] h-[500px] object-cover " src={img} />
          <div className="relative   ml-5 top-[-300px] text-white">
            <div className="md:ml-9 md:text-center md:flex md:flex-col md:justify-center md:items-center ">
              <h1 className="text-3xl md:text-3xl ">Our Store</h1>
              <p className="text-3xl md:text-5xl ">Find Your Peace</p>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Home;
