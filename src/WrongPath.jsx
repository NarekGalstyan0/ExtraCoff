import React from "react";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
const WrongPath = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <HiOutlineArrowSmallLeft
        onClick={() => navigate(-1)}
        className=" hover:text-[#3AC9B0] hover:scale-125 relative cursor-pointer left-[25px] top-[50px]"
        size={30}
      />
      <div className="text-center block relative top-[300px] text-3xl ">
        Something Went Wrong
      </div>
    </div>
  );
};

export default WrongPath;
