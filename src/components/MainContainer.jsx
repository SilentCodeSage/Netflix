import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  //if movie is null then dont render the component
  console.log(movies)
  if (!movies){
    setTimeout(()=>{
      console.log("movies is null");
      
    },1000)
    return;
  } 

  const mainMovie = movies[4];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className=" w-screen h-screen overflow-hidden">
     
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
