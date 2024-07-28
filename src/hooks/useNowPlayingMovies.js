import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
    // const genreData = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbApiKey}&language=en-US`)

    // const data = await fetch("http://www.omdbapi.com/?apikey=4787b1b2&s=action");
    // const json = await data.json();
    // console.log(json);
  };
};

export default useNowPlayingMovies;
