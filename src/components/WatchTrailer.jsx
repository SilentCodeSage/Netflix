import React from "react";
import { useDispatch } from "react-redux";
import { setNavigate, setTrailerContent } from "../utils/watchSlice";

const WatchTrailer = ({ info }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(setTrailerContent(info));
          dispatch(setNavigate());
          
        }}
        className="bg-red-600 px-2 py-1 mb-4 rounded text-white"
      >
        Watch Trailer
      </button>
    </div>
  );
};

export default WatchTrailer;
