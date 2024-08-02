import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const fetchPopularMovieData = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=India' +
        API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    //fetchPopularMovieData();
  }, []);
};

export default usePopularMovies;
