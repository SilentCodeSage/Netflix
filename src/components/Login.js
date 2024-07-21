import React, { useRef, useState } from "react";
import Header from "./Header";
import { loginBackground } from "../utils/constants";
import { validate } from "../utils/vaildate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  //resuing the form for signup and signin
  //isLogin ~ signIn
  const [isLogin, setIsLogin] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);

  //useRef gives a direct referance to the dom element
  //page reerender wont hapen in the case of useRef
  const email = useRef("");
  const password = useRef("");

  const toggleSignIn = () => {
    setIsLogin(!isLogin);
  };

  const handleClick = () => {
    //email and password validation
    //log
    const verificationResult = validate(
      email.current.value,
      password.current.value
    );
    const { emailValid, passwordValid } = verificationResult;
    setEmailValid(emailValid);
    setPasswordValid(passwordValid);

    //if email and password are not valid then dont proceed to create new use

    if (emailValid && passwordValid === false) return;

    if (!isLogin) {
      //signup logic

      //promise handling.....
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={loginBackground} alt="Login-page"></img>
      </div>
      {/* use form libraries for big forms */}
      <form
        onClick={(e) => e.preventDefault()}
        className="rounded-lg bg-black bg-opacity-85 absolute w-3/12 h-auto mt-36 mx-auto right-0 left-0 flex flex-col py-24 px-6 items-center"
      >
        <div className="flex flex-col items-start w-full mb-8">
          <h1 className="text-white ml-12 text-2xl">
            {isLogin === true ? "Sign in" : "Sign up"}
          </h1>
        </div>
        {!isLogin && (
          <input
            className="my-4 p-4 rounded w-9/12 h-12 bg-gray-700 bg-opacity-55"
            type="text bg-red"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={email}
          className="my-4 p-4 rounded w-9/12 h-12 bg-gray-700 bg-opacity-55"
          type="text bg-red"
          placeholder="Email or mobile Number"
        ></input>
        <div className="flex items-start w-9/12">
          {!isEmailValid && (
            <p className="text-red-700 mb-2 text-sm">
              Email or Mobile is not valid
            </p>
          )}
        </div>
        {
          <input
            ref={password}
            className=" my-4 p-4 rounded w-9/12 h-12 bg-gray-700 bg-opacity-55"
            type="text"
            placeholder="Password"
          ></input>
        }
        <div className="flex items-start w-9/12">
          {isLogin && !isPasswordValid && (
            <p className="text-red-700 mb-2 text-sm">Incorrect Password</p>
          )}
        </div>

        <button
          onClick={handleClick}
          className=" my-4 p-4 rounded w-9/12 bg-red-600 text-white h-12"
        >
          {isLogin === true ? "Sign in" : "Sign up"}
        </button>
        <div className="w-9/12 my-8 ">
          <p className="text-white flex items-start w-full">
            <span className="text-gray-400 mr-1">
              {isLogin === true
                ? "New to Netflix?"
                : "Already Have an Account?"}
            </span>
            <span className="cursor-pointer" onClick={toggleSignIn}>
              {isLogin === true ? "Sign up now." : "Sign in now."}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
