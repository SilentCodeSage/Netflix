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

  const handleGPTButton = ()=>{
    dispatch(toggleGPT())
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        //dispatching add user when user signed in
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
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
    <div className="pt-2 absolute w-full h-auto bg-gradient-to-b from-black z-20">
      <img className="ml-24 w-48 " src={mainLogo} alt="Main-Logo"></img>
      <div className="absolute top-4 right-4 flex items-center space-x-4 p-4">
        <button className="bg-violet-600 p-3 text-white rounded" onClick={handleGPTButton}>{isGPTpage === true?"HomePage":"GPT Search"}</button>
        <img
          className="w-11 rounded"
          src={USER}
          alt="user"
        ></img>
        {user && (
          <button
            onClick={handleSignOut}
            className="z-50 text-white font-3xl py-2 px-4 rounded"
          >
            ▼
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
