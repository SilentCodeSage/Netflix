import React, { useRef } from "react";
import run from "../utils/geminiAI";
import { useDispatch } from "react-redux";
import { setMovieSearchResults, setShowGptSuggesstionShimmer } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();

  const handleSearch = async () => {
    dispatch(setShowGptSuggesstionShimmer(true))
    //gives the searchText as prompt
    const result = await run(searchText.current.value);
    const ans = Promise.all(
      result &&
        result.map(async (data) => {
          console.log(data);
          const searchResults = await fetch(
            `https://www.omdbapi.com/?t=${data}&apikey=4787b1b2`
          );
          const info = await searchResults.json();
          return info;
        })
    );
    const movieSearchResults = await ans;
    dispatch(setMovieSearchResults(movieSearchResults));
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
