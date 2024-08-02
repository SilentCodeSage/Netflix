import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const MovieList = () => {
  useNowPlayingMovies();

  const movies = useSelector((store) => store.movies?.nowPlayingMovies)

  // useEffect(()=>{
    
  // },[movies])
  
  return (
    <div className="px-12 my-8 opacity-100">
      <h1 className="text-2xl mb-4 font-bold text-white">Now Playing</h1>
      <div className="flex  items-center overflow-x-auto scrollbar-none mt-3 space-x-8 ">
      {
          //console.log(movies)
        }
        {movies && movies.results.map((data) => (
          <MovieCard key={data.id} data={data} />
        ))}
    </div>
        
      </div>
   
  );
};

export default MovieList;
