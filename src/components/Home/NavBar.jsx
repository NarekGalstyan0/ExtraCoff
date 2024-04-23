import React, { useState } from "react";
import { TbGridDots } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { IoBag } from "react-icons/io5";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const count = useSelector((store) => store.Bag.Bag);
  const navigate = useNavigate();
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const url =
    "https://media.istockphoto.com/id/1303583671/photo/cup-glass-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=612x612&w=0&k=20&c=fAh3m6Hqxz-qeA45Tj2jGARhRiGFhgm80dLVthnvlD8=";

  return (
    <div className="relative top-[-100px] w-full flex flex-col " id="/navbar">
      <div className="  flex mb-[100px] justify-between">
        <div className="ml-6 mt-4 cursor-pointer flex md:ml-[200px]">
          <h1 className=" text-[#391F0B] font-serif mt-5 text-3xl">
            <Link to="/navbar">Coffee </Link>
          </h1>
          <p className=" font-serif text-1xl mt-5 text-[#3AC9B0] ">Shop</p>
        </div>
        <div className="">
          <ul className="hidden md:flex items-center p-5 h-full   ">
            <div className=" text-2xl "></div>
            <li className=" hover:scale-125 cursor-pointer font-serif mr-5 m-5 text-2xl  hover:text-[#3AC9B0] ">
              <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
                Home
              </Link>
            </li>

            <li className=" hover:scale-125 cursor-pointer font-serif mr-5 m-5 text-2xl hover:text-[#3AC9B0] ">
              <Link
                to="/assortment"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Our Assortment
              </Link>
            </li>
            <li className=" hover:scale-125 cursor-pointer font-serif mr-5 m-5 text-2xl hover:text-[#3AC9B0] ">
              <Link
                to="/contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
            <li className=" hover:scale-125 cursor-pointer mr-5 m-5  hover:text-[#3AC9B0] ">
              <IoBag onClick={() => navigate("/bag")} className="text-3xl" />
            </li>
            <p className="relative right-[20px] top-[-12px] ">
              {" "}
              {count.length}
            </p>
          </ul>
        </div>

        <div
          onClick={handleNav}
          className=" md:hidden text-[#391F0B] cursor-pointer text-3xl mt-5 mr-5 "
        >
          {!nav ? <AiOutlineClose /> : <TbGridDots />}
        </div>
      </div>

      <div className={!nav ? "  absolute justify-center" : "hidden "}>
        <ul
          style={{ backgroundImage: `url(${url})` }}
          className="flex  flex-col items-center  justify-center rounded-xl text-3xl  w-[350px] h-[500px]  text-white "
        >
          <div className="relative flex bottom-[40px] mt-[100px] right-[100px]">
            <h1 className="text-3xl text-[#3AC9B0] font-serif">Coffee</h1>
            <p className="text-[15px] relative font-serif bottom-2">Shop</p>
          </div>

          <li className=" hover:scale-125 hover:text-[#3AC9B0] font-serif text-center border-white border-r-[3px] border-b w-[200px]  mt-6 cursor-pointer mr-5 m-5 ">
            <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>

          <li className=" hover:scale-125 hover:text-[#3AC9B0] font-serif text-center border-white border-r-[3px] border-b w-[200px] mt-9 cursor-pointer mr-5 m-5 ">
            <Link
              to="/assortment"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Our Assortment
            </Link>
          </li>
          <li className=" hover:scale-125 hover:text-[#3AC9B0] font-serif text-center border-white border-r-[3px] border-b w-[200px] mt-9 cursor-pointer mr-5 m-5 ">
            <Link
              to="/contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
          <li className=" hover:scale-125 hover:text-[#3AC9B0] text-center cursor-pointer mr-5 m-5 ">
            <IoBag onClick={()=>navigate("/bag")} className="text-3xl" />
          </li>
          <p className="relative ml-[40px]  text-[17px] top-[-67px] ">
            {count.length}
          </p>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
