import React from "react";
import { mainLogo } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { USER } from "../utils/constants";
import { toggleGPT } from "../utils/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const isGPTpage = useSelector((store) => store.gpt.showGptSearch);
  const isNavigate = useSelector((store) => store.watch.navigate);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGPTButton = () => {
    dispatch(toggleGPT());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        //dispatching add user when user signed in
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

        isNavigate && navigate("/browse");
      } else {
        // User is signed out
        //dispatching the reducer removeuser when user signsOut
        dispatch(removeUser());
         navigate("/");
      }
    });

    //this is called when the component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="pt-2 z-50 fixed w-full h-auto  bg-gradient-to-b from-gray-950 via-gray-900 to-transparent flex justify-between">
      <img
        className="md:ml-24 w-48 object-center"
        src={mainLogo}
        alt="Main-Logo"
      ></img>
      <div className="md:top-4 md:right-4  md:mt-0 items-center justify-center space-x-4 p-4 flex md:flex-row flex-col">
        <div className="flex">
          {/* <img
            className="md:w-11 md:h-11 w-8 md:block hidden h-8 rounded md:ml-0 ml-3"
            src={USER}
            alt="user"
          ></img> */}
          
        </div>
        <div className="flex">
          <button
            className="bg-violet-600 md:p-3 p-2  md:text-base text-sm text-white rounded"
            onClick={handleGPTButton}
          >
            {isGPTpage === true ? "HomePage" : "GPT Search"}
          </button>
          {user && (
            <button
              onClick={handleSignOut}
              className="z-50 text-white font-3xl py-2 px-4 rounded"
            >
               <img className="w-8 h-8 rounded bg-opacity-50 " alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDArB9zT_e6hrQJFY1CMcSyD9ehtK37k8U5Q&s"></img>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
