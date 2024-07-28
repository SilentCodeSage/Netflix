import React  from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailorVideo";

const VideoBackground = ({ movieTitle }) => {
  useTrailerVideo(movieTitle);
  const trailer = useSelector((store)=>store.movies.trailorVideo);
  return (
    <div className=" w-screen h-screen overflow-hidden">
        {
            trailer && <iframe
            className="w-screen aspect-video overflow-hidden"
            src={`https://www.youtube.com/embed/${trailer}?controls=0&modestbranding=1&autohide=1&autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          
          
        }
      
    </div>
  );
};

export default VideoBackground;
