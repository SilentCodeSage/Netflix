import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useState } from "react";

const MainContainer = () => {
  
  const [descreption,setDescreption] = useState(null);
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const mainMovie = movies && movies[1];

  useEffect(() =>{
    fetchData();
  })

  const fetchData = async() =>{
    if(!movies) return;
    const data = await fetch(`http://www.omdbapi.com/?apikey=4787b1b2&t=${mainMovie}`);
    const mainMovieData = await data.json();
    setDescreption(mainMovieData.Plot);
  }

  if (!movies){
    setTimeout(()=>{
      console.log("movies is null");
      
    },1000)
    return;
  } 
  return (
    <div className=" w-screen h-screen overflow-hidden">
      
        <VideoTitle title={mainMovie} overview={descreption} />
        <VideoBackground movieTitle={mainMovie} />
    </div>
  );
};

export default MainContainer;
