import React from "react";
import GptSearchBar from "./GptSearchBar";
import { loginBackground } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div className="h-screen w-screen">
      <div className="absolute -z-10">
        <img
          className="h-screen md:h-full md:object-none object-cover"
          src={loginBackground}
          alt="Login-page"
        ></img>
      </div>
      <div className="md:pt-0 pt-32">
        <GptSearchBar />
      </div>

      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
