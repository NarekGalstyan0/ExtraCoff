import React, { useEffect } from "react";
import { IoBag } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Remove } from "../../features/Bag/BagSlice";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Bag = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Added = useSelector((state) => state.Bag.Bag);
  const count = useSelector((state) => state.Bag.Bag);
  const tot = useSelector((state) => state.Bag.total);

  return (
    <div className="">
      <div className="flex justify-between">
        <HiOutlineArrowSmallLeft
          onClick={() => navigate(-1)}
          className=" hover:text-[#3AC9B0] hover:scale-125 relative cursor-pointer left-[25px] top-[50px]"
          size={30}
        />

        <div className="relative right-[25px] top-[50px] text-2xl ">
          Total : {tot}
        </div>
      </div>

      <div className="flex justify-center mt-9">
        <h1 className=" text-center text-3xl">Your Store</h1>
        <IoBag className="text-2xl" />
        <p className="relative bottom-3"> {count.length}</p>
      </div>
      <div className="relative top-[100px]">
        <div className="md:flex  flex-wrap justify-center  ">
          {Added.map((coffee) => (
            <div
              key={coffee.id}
              className="text-black  md:ml-5 flex justify-center "
            >
              <div className="w-[350px]  h-[490px] my-6 rounded-xl border border-black mt-8 ">
                <div className=" flex  flex-col   items-center w-full h-full ">
                  <img
                    src={coffee.img}
                    alt="xxx"
                    className=" rounded-xl object-cove  hover:scale-105 transition ease-in duration-500 mt-5 w-[300px] h-[200px]"
                  />
                  <div className=" mt-5 m-5 ">
                    <h1 className="  text-[#391F0B]  font-serif text-2xl">
                      {coffee.name}
                    </h1>
                    <p className=" text-[#391F0B]  font-serif ">
                      {coffee.description}
                    </p>
                    <p className=" text-2xl mt-3">Price : {coffee.price}</p>
                  </div>
                </div>

                <div className="flex  justify-center items-center ">
                  <button
                    onClick={() => dispatch(Remove({ id: coffee.id }))}
                    className=" w-[250px] mb-5 text-black h-[33px] text-center border text-2xl  border-black rounded-b-[15px]  bg-[#E8E8E8] "
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bag;
