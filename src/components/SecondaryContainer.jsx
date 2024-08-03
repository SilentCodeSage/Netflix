import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  const PopularMovies = useSelector((store) => store.movies?.popularVidoes);
  // console.log(PopularMovies)
  return (
    <div className="flex justify-center">
      <div className="flex md:w-auto w-screen flex-col md:p-12 p-2 relative mt-[620px] md:mt-[850px] z-20 bg-opacity-50 bg-black">
      <h1 className="text-white text-center font-bold text-3xl">^</h1>
        <MovieList category={movies} name={"Now Playing"}/>
        <MovieList category={PopularMovies} name={"Popular"}/>
        {/* <MovieList /> */}
        {/* <MovieList /> */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
