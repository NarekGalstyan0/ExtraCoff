import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async () => {
    try{
    await createUserWithEmailAndPassword(auth, email, password);
    }catch(error){
      console.error(error)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[300px] border border-gray-300 rounded-md p-4 shadow-lg ">
        <h2 className="text-2xl p-3">Sign Up</h2>
        <form>
          <div>
            <label className="block mb-1">First name : </label>
            <input
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="w-full  rounded-md h-[30px] border border-gray-300"
              type="text"
            />
          </div>

          <div className="">
            <label className="block mt-3 mb-1">Last name: </label>
            <input
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="w-full  rounded-md h-[40px] border border-gray-300 "
              type="text"
            />
          </div>

          <div className="">
            <label className="block mt-3 mb-1">Email Address : </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  rounded-md h-[40px] border border-gray-300 "
              type="email"
            />
          </div>
          <div className="">
            <label className="block mt-3 mb-1">Password: </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full  rounded-md h-[40px] border border-gray-300 "
              type="password"
            />
          </div>
        </form>
        <div className="text-center h-[35px] mt-5 bg-blue-700 text-2xl text-white hover:bg-blue-600 ">
          <button onClick={handleRegister} >Sign Up</button>
        </div>
        <p
          className="mt-2 text-1xl underline cursor-pointer"
          onClick={() => navigate(-1)}
        >
          Sign In
        </p>
      </div>
    </div>
  );
};

export default SignUp;
