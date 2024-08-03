import React, { useRef } from "react";
import Run from "../utils/geminiAI";
import { useDispatch } from "react-redux";
import { setMovieSearchResults, setShowGptSuggesstionShimmer } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();

  const handleSearch = async () => {
    dispatch(setShowGptSuggesstionShimmer(true))
    //gives the searchText as prompt
    const result = await Run(searchText.current.value);
    console.log(result)
    const ans = await Promise.all(
      result &&
        result.map(async (data) => {
          console.log(data);
          const searchResults = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=717201877c6a679887571d65a997aebb&query=${data}`
          );
          const info = await searchResults.json();
          return info;
        })
    );
    const movieSearchResults = await ans;
    console.log(movieSearchResults);
    movieSearchResults && dispatch(setMovieSearchResults(movieSearchResults));
  };
  return (
    <div
      className="pt-[10%] flex justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <form
        action=""
        className="w-full md:w-6/12 bg-black opacity-80 grid grid-cols-12 rounded-full"
      >
        <input
          ref={searchText}
          className="col-span-8 px-12 py-6 bg-black text-white rounded-full opacity-80 focus:opacity-95 focus:outline-none"
          type="text"
          placeholder="What would you like to search today"
        />
        <button
          onClick={handleSearch}
          className="col-span-4 bg-red-600 text-white p-3 rounded-full opacity-100 duration-100"
        >
          <span className="font-bold text-xl">Search</span>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
