import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice"; 

const useTrailerVideo = (movieTitle) => {
  const trailer = useSelector((store)=>store.movies.trailorVideo);

  const dispatch = useDispatch();
  useEffect(() => {
    !trailer && getTrailorData();
  }, []);
  const getTrailorData = async () => {
     const data = await fetch(
     `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${movieTitle}+trailer&key=AIzaSyASrkvyYOfgaJzHmVPz8N_StUytQGMuolA`
    );
     const json = data && await data.json();
    //console.log(json.items[0].id.videoId)
    json && dispatch(addTrailer(json.items[0].id.videoId))
  };
};
export default useTrailerVideo;
