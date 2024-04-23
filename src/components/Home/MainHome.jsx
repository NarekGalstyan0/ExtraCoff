import React, { useState } from "react";
import { TypeOfCoffees } from "../../data/data";
import { useDispatch } from "react-redux";
import { add } from "../../features/Bag/BagSlice";

const MainHome = () => {
  const [filter, setFilter] = useState();

  const dispatch = useDispatch();

  const addBag = (coffee) => {
    dispatch(add(coffee));
  };

  const TypeForFilter = (e) => {
    const value = e.target.value.toLowerCase();
    setFilter(value);
  };

  const FinallyFilter = TypeOfCoffees.filter((coffee) =>
    coffee.name.toLowerCase().includes(filter)
  );

  return (
    <div className="relative top-[400px]  text-black h-full" id="/assortment">
      <div>
        <h1 className="text-3xl text-[#391F0B] mt-5 ml-6 mb-6">
          What do you prefer ?
        </h1>
      </div>

      <div className="ml-5 text-center  ">
        <h1 className="mb-3 text-2xl ">Find Quickly</h1>
        <div>
          <input
            onChange={TypeForFilter}
            className="   w-[200px] h-[35px] text-center rounded-full"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="md:flex flex-wrap justify-center  ">
        {FinallyFilter.map((coffee) => (
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
                  onClick={() => addBag(coffee)}
                  className=" w-[250px] mb-5 text-black h-[33px] text-center border text-2xl  border-black rounded-b-[15px]  bg-[#E8E8E8] "
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainHome;
