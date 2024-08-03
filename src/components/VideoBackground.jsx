import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailorVideo";

const VideoBackground = ({ id }) => {
  useTrailerVideo(id);
  const trailer = useSelector((store) => store.movies.trailorVideo);

  return (
    <div className="-z-10 md:mt-0 mt-20 absolute w-screen h-screen overflow-hidden">
      {
        //trailer && console.log(trailer)
      }
      {trailer && (
        <div className=" relative w-full h-0" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
        <iframe
          className="scale-150 absolute top-0 left-0 w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailer}?controls=0&modestbranding=1&autohide=1&autoplay=1&mute=1&playsinline=1&loop=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      
      )}
    </div>
  );
};

export default VideoBackground;
