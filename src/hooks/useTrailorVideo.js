import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice"; // Adjust the import path based on your project structure
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailorVideo);
  useEffect(() => {
    getTrailorData();
  }, []);

  const getTrailorData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    if(json.results){
      const trailers =  json.results.filter((data) => data.type === "Trailer");
      const trailer = trailers[0];
      dispatch(addTrailer(trailer));
    }else{
      console.log(json.results)
    }
     
   
  };

  const videoSrc = trailer
    ? `https://www.youtube.com/embed/${trailer.key}`
    : "";
  return { videoSrc };
};
//export const{videoSrc} =
export default useTrailerVideo;
