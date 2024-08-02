import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";
import useTrailerVideo from "../hooks/useTrailorVideo";

const Watch = () => {
    const [id,setId]  = useState(null);

  const info = useSelector((store) => store.watch.trailerVideoData);
  console.log(info)

  useTrailerVideo(id);

  const trailer = useSelector((store) => store.movies.trailorVideo);
  console.log(trailer);

  useEffect(() => {
    info && setId(info.id);
  }, [info]);

  
  return info && (
    <div
      className=""
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${info.backdrop_path}")`,
      }}
    >
      <Header />
      <div className="flex flex-col justify-center p-24 h-screen">
        <div className="flex justify-evenly items-center">
          <div>
            <iframe
              className="rounded-3xl  shadow-2xl"
              width="1200"
              height="700"
              src={`https://www.youtube.com/embed/${trailer}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <div className="duration-300 transition-transform transform hover:scale-105 relative flex-none opacity-100 cursor-pointer shadow-2xl z-10 rounded-b">
              <img
                className="w-80 h-[600px] rounded-lg"
                src={IMG_CDN + info.poster_path}
                alt="MovieCard"
              />
              <div className="flex flex-col justify-end h-[500px] absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent bg-opacity-90 shadow-2xl rounded-lg ">
                <h1 className="text-white text-3xl py-1">{info.title}</h1>
                <p className="text-gray-500 text-sm py-1">
                  Action/Drama/Sci-fi
                </p>
                <h2 className="text-white text-xl py-1">Summary</h2>
                <p className="text-gray-400 text-sm w-full text-justify mb-4 px-1 py-1 ">
                  {info.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
