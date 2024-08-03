import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPopularMovieData();
  }, []);

  const fetchPopularMovieData = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=India',
        API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json));
  };

  
};

export default usePopularMovies;
