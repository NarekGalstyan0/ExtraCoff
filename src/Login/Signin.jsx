import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, facebookProvider } from "../config/firebase";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const CLIENT_ID = "b2280fbd5baba3fd5495";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const loginWithGitHub = () => {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
    );
  };

  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async (e) => {
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[300px] border border-gray-300 p-4 rounded-md shadow-lg ">
        <h2 className="text-2xl p-3"> Sign In</h2>
        <div>
          <label className="block mb-1">Email :</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-start rounded-md h-[40px] border border-gray-300 "
            type="email"
          />
        </div>
        <div>
          <label className="block mt-3 mb-1">Password :</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full text-start h-[40px] rounded-md border border-gray-300"
            type="password"
          />
        </div>

        <div className="text-center h-[35px] mt-5 text-2xl hover:bg-blue-600 text-white bg-blue-700">
          <button type="button" onClick={handleRegister}>
            Log In
          </button>
        </div>

        <div className="flex">
          <div className="w-[120px] h-0 border border-black mt-5"></div>
          <p className="mt-2 ml-1 mr-1">or</p>
          <div className="w-[120px] h-0 border border-black mt-5"></div>
        </div>

        <div
          onClick={signInWithGoogle}
          className="text-center cursor-pointer h-[45px]  mt-5 text-3xl text-white rounded-xl shadow-xl bg-gray-400  "
        >
          <FaGoogle
            onClick={signInWithGoogle}
            className=" cursor-pointer relative top-2  left-[117px]"
          />
        </div>

        <div
          onClick={signInWithFacebook}
          className="text-center cursor-pointer h-[45px]  mt-5 text-3xl text-white rounded-xl  bg-[#0866FF]"
        >
          <FaFacebook
            onClick={signInWithFacebook}
            className=" cursor-pointer relative top-2  left-[117px]"
          />
        </div>

        <div
          onClick={loginWithGitHub}
          className="text-center cursor-pointer h-[45px]  mt-5 text-3xl text-white rounded-xl  bg-black"
        >
          <FaGithub
            onClick={loginWithGitHub}
            className=" cursor-pointer relative top-2  left-[117px]"
          />
        </div>

        <div className="flex justify-between mt-3">
          <p className="underline hover:scale-105 cursor-pointer ">
            Forgot Password?
          </p>
          <p
            className="mr-1 cursor-pointer hover:scale-105 underline  "
            onClick={() => navigate("/user/signUp")}
          >
            Sign Up
          </p>
          <p
            className="mr-1 cursor-pointer hover:scale-105 underline  "
            onClick={logout}
          >
            Sign out
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
