import React from "react";
import MovieCard from "./MovieCard";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const MovieList = ({category ,name}) => {
  // useNowPlayingMovies();
  // usePopularMovies();
  return (
    <div className="md:px-12 my-8 opacity-100 md:w-auto w-screen">
      <h1 className="text-2xl mb-4 font-bold text-white">{`${name}`}</h1>
      <div className="flex  items-center overflow-x-auto scrollbar-none mt-3 space-x-8 ">
      {
          //console.log(movies)
        }
        {category && category.results.map((data) => (
          <MovieCard key={data.id} data={data} />
        ))}
    </div>
        
      </div>
   
  );
};

export default MovieList;
