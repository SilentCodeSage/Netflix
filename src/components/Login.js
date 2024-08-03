import React, { useRef, useState } from "react";
import Header from "./Header";
import { loginBackground } from "../utils/constants";
import { validate } from "../utils/vaildate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const user = useSelector((store) => store.user);

  const toggleSignIn = () => {
    setIsLogin(!isLogin);
  };

  const handleClick = () => {
    const verificationResult = validate(email.current.value, password.current.value);
    const { emailValid, passwordValid } = verificationResult;
    setEmailValid(emailValid);
    setPasswordValid(passwordValid);

    if (!emailValid || !passwordValid) return;

    if (!isLogin) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
            .then(() => {})
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error.code, error.message));
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          // navigate("/browse")
        })
        .catch((error) => console.log(error.code, error.message));
    }
  };

  return (
    <div className="relative h-screen text-white">
      <Header />
      <div className="fixed inset-0">
        <img
          src={loginBackground}
          alt="Login-page"
          className="object-cover w-full h-full"
        />
      </div>
      <form
        onSubmit={(e) => { e.preventDefault(); handleClick(); }}
        className="rounded-lg bg-black bg-opacity-80 absolute w-11/12 md:w-3/12 max-w-md min-h-[60%] mt-36 mx-auto right-0 left-0 flex flex-col py-24 px-6 items-center overflow-auto"
      >
        <div className="flex flex-col items-start w-full mb-8">
          <h1 className="text-white ml-12 text-2xl">
            {isLogin ? "Sign in" : "Sign up"}
          </h1>
        </div>
        {!isLogin && (
          <input
            ref={name}
            className="my-4 p-4 rounded w-9/12 max-w-md h-12 bg-gray-700 bg-opacity-55"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="my-4 p-4 rounded w-9/12 max-w-md h-12 bg-gray-700 bg-opacity-55"
          type="text"
          placeholder="Email or Mobile Number"
        />
        <div className="flex items-start w-9/12">
          {!isEmailValid && (
            <p className="text-red-700 mb-2 text-sm">Email or Mobile is not valid</p>
          )}
        </div>
        <input
          ref={password}
          className="my-4 p-4 rounded w-9/12 max-w-md h-12 bg-gray-700 bg-opacity-55"
          type="password"
          placeholder="Password"
        />
        <div className="flex items-start w-9/12">
          {isLogin && !isPasswordValid && (
            <p className="text-red-700 mb-2 text-sm">Incorrect Password</p>
          )}
        </div>
        <button
          type="submit"
          className="my-4 p-4 rounded w-9/12 bg-red-600 text-white h-12"
        >
          {isLogin ? "Sign in" : "Sign up"}
        </button>
        <div className="w-9/12 my-8 text-center">
          <p className="text-white flex items-start w-full">
            <span className="text-gray-400 mr-1">
              {isLogin ? "New to Netflix?" : "Already Have an Account?"}
            </span>
            <span className="cursor-pointer" onClick={toggleSignIn}>
              {isLogin ? "Sign up now." : "Sign in now."}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
