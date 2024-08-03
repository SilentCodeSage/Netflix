import React from "react";
import { IMG_CDN } from "../utils/constants";
import WatchTrailer from "./WatchTrailer";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    
    <div className="md:w-auto md:h-auto w-48 h-72 duration-300 transition-transform transform hover:scale-105 relative flex-none opacity-100 cursor-pointer shadow-2xl z-10 rounded-b">
      <img 
        className="md:w-80 md:h-[600px] w-48 h-72 rounded-lg"
        src={IMG_CDN + data.poster_path}
        alt="MovieCard"
      />
      <div className="flex flex-col justify-end md:h-[500px] absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent bg-opacity-90 shadow-2xl rounded-lg ">
        <h1 className="text-white text-3xl py-1">{data.title}</h1>
        <p className="text-gray-500 text-sm py-1">Action/Drama/Sci-fi</p>
        <h2 className="text-white text-xl py-1 md:block hidden">Summary</h2>
        <p className="text-gray-400 text-sm w-72 text-justify mb-4 px-1 py-1 line-clamp-4 md:block hidden">
          {data.overview}
        </p>
        <Link to="/watch">
        <WatchTrailer info={data} /></Link>
      </div>
    </div>
  );
};

export default MovieCard;
