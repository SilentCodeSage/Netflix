import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen flex flex-col justify-center h-screen px-24 text-white bg-gradient-to-r from-gray-900 to-transparent aspect-video">
      <h1 className="font-bold text-6xl text-white">{title}</h1>
      <p className="w-1/4 text-lg mt-4 mb-6 leading-relaxed">{overview}</p>
      <div>
        <button className=" hover:opacity-50 text-xl bg-white text-black font-bold py-3 px-8 rounded hover:bg-slate-200 transition duration-300 ease-in-out">
          ▷ Play
        </button>
        <button className="opacity-70 hover:opacity-90 text-xl bg-gray-900 text-white font-bold py-3 px-8 rounded ml-4 hover:bg-gray-300 hover:text-black text transition duration-300 ease-in-out">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
