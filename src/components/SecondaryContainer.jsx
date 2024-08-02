import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  return (
    <div className=" ">
      <div className="p-12 relative mt-[850px] z-20 bg-opacity-50 bg-black">
      <h1 className="text-white text-center font-bold text-3xl">^</h1>
        <MovieList />
        <MovieList />
        <MovieList />
        <MovieList />
      </div>
    </div>
  );
};

export default SecondaryContainer;
