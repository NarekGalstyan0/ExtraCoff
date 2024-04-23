import React from "react";
import img from "../../assets/CoffeeAssets/forFooter.jpg";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative top-[500px]" id="/contact" >
      <div className="h-full w-full  ">
        <img
          className="w-full  h-[400px] filter brightness-75 object-center object-cover "
          src={img}
          alt="xxx"
        />
        <div className="md:flex  md:items-center mr-[400px] md:justify-around ">
          <div className="absolute ml-1 bottom-[150px] text-white ">
            <h1 className="text-center text-3xl mb-3 ">Cafe</h1>

            <ul className="flex ml-3 md:ml-[-70px] md:text-2xl">
              <li className=" md:ml-6 cursor-pointer ml-3">Home</li>
              <li className=" md:ml-6 cursor-pointer ml-3">Service </li>
              <li className=" md:ml-6 cursor-pointer ml-3">FAQ</li>
              <li className=" md:ml-6 cursor-pointer ml-3">BAG</li>
            </ul>

            <div className="">
              <ul className="flex md:text-3xl text-[25px]  mt-9 ">
                <li className="ml-5 cursor-pointer hover:scale-125 hover:text-[#3AC9B0] ">
                  <FaGoogle />
                </li>
                <li className="ml-5 cursor-pointer   hover:scale-125 hover:text-[#3AC9B0] ">
                  <FaFacebook />
                </li>
                <li className="ml-5 cursor-pointer  hover:scale-125 hover:text-[#3AC9B0]">
                  <FaTwitter />
                </li>
                <li className="ml-5 cursor-pointer hover:scale-125 hover:text-[#3AC9B0]">
                  <FaInstagram />
                </li>
                <li className="ml-5 cursor-pointer hover:scale-125 hover:text-[#3AC9B0]">
                  <FaLinkedin />
                </li>
              </ul>
            </div>
          </div>

          <div className="absolute md:mr-[300px] bottom-[250px]  right-[100px] text-white">
            <h1 className="text-3xl">Contact Us</h1>
            <div className="w-[70px] absolute bottom-[-20px] md:mb-4 border "></div>
            <div className="absolute md:text-2xl  text-[16px] font-bold bottom-[-70px]">
              <div className="mb-[-30px] ">
                <p> Phone :094764770 </p>
                <p>Gmail:galstyann782@gmail.com </p>
                <p>WebSite: Coffee </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
