import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useState } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const MainContainer = () => {
  const [description, setDescription] = useState(null);
  const [movieName, setMovieName] = useState(null);
  const [videoId, setVideoId] = useState(null);

  useNowPlayingMovies();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  useEffect(() => {
    if (movies) {
      const randomIndex = Math.floor(Math.random() * movies?.results.length);
      const { title, overview, id } = movies?.results[randomIndex];
      setMovieName(title);
      setDescription(overview);
      setVideoId(id);
    }
  }, [movies]);

  return (
    <div className="fixed m-0 p-0 w-screen h-screen overflow-hidden ">
      <VideoTitle title={movieName} overview={description} />
      {videoId && <VideoBackground id={videoId} />}
    </div>
  );
};

export default MainContainer;
