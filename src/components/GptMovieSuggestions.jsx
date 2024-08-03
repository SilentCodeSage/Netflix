import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = () => {
  const movies = useSelector((store) => store.gpt.gptSearchResults);
  const [movieList, setMovieList] = useState(null);
  console.log(movies);

  useEffect(() => {
    if (movies && movies.length > 0) {
      const extractedMovies = movies.map((data) => data.results[0]);
      console.log("Extracted movies:", extractedMovies);
      setMovieList(extractedMovies);
    } else {
      console.error("Movies is not an array:", movies);
    }
  }, [movies]);
  return (
    <div className="mt-12 flex overflow-x-auto scrollbar-none">
      {movieList &&
        movieList.map((data) => {
          return <MovieCard data={data} />;
        })}
    </div>
  );
};

export default GptMovieSuggestions;
