import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-24 my-8">
      <h1 className="text-2xl mb-4 font-bold text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-thin mt-3 space-x-4 ">
        {movies && movies.map((data) => (
          <MovieCard key={data.id} poster_path={data.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
