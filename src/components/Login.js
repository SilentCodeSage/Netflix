import React, { useState } from "react";
import Header from "./Header";
import { loginBackground } from "../utils/constants";

const Login = () => {
  //resuing the form for signup and signin
  const [isLogin, setIsLogin] = useState(true);

  const handleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={loginBackground} alt="Login-page"></img>
      </div>
      {/* use form libraries for big forms */}
      <form className="rounded-lg bg-black bg-opacity-85 absolute w-3/12 h-auto mt-36 mx-auto right-0 left-0 flex flex-col py-24 px-6 items-center">
        <div className="flex flex-col items-start w-full mb-8">
          <h1 className="text-white ml-12 text-2xl">
            {isLogin === true ? "Sign in" : "Sign up"}
          </h1>
        </div>
        {!isLogin && (
          <input
            className=" mb-8 p-4 rounded w-9/12 h-12 bg-gray-700 bg-opacity-55"
            type="text bg-red"
            placeholder="Full Name"
          ></input>
        )}
        <input
          className=" mb-8 p-4 rounded w-9/12 h-12 bg-gray-700 bg-opacity-55"
          type="text bg-red"
          placeholder="Email or mobile Number"
        ></input>
        {isLogin && (
          <input
            className=" mb-8 p-4 rounded w-9/12 h-12 bg-gray-700 bg-opacity-55"
            type="text"
            placeholder="Password"
          ></input>
        )}
        {!isLogin && (
          <input
            className=" mb-8 p-4 rounded w-9/12 h-12 bg-gray-700 bg-opacity-55"
            type="text"
            placeholder="Create new password"
          ></input>
        )}
        {!isLogin && (
          <input
            className=" mb-8 p-4 rounded w-9/12 h-12 bg-gray-700 bg-opacity-55"
            type="text"
            placeholder=" Confirm new password"
          ></input>
        )}

        <button className=" mb-8 p-4 rounded w-9/12 bg-red-600 text-white h-12">
          {isLogin === true ? "Sign in" : "Sign up"}
        </button>
        <div className="w-9/12 mb-8 ">
          <p className="text-white flex items-start w-full">
            <span className="text-gray-400 mr-1">
              {isLogin === false
                ? "New to Netflix?"
                : "Already Have an Account"}
            </span>
            <span className="cursor-pointer" onClick={handleForm}>
              {isLogin === true ? "Sign up now." : "Sign up now."}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
