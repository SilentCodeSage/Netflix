import React, { useRef } from "react";
import run from "../utils/geminiAI";
import { useDispatch } from "react-redux";
import { setMovieSearchResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();

  const handleSearch = async () => {
    //gives the searchText as prompt
    const result = await run(searchText.current.value);
    const ans = Promise.all(
      result &&
        result.map(async (data) => {
          const searchResults = await fetch(
            `http://www.omdbapi.com/?t=${data}&apikey=4787b1b2`
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
      <form action="" className="w-[80%] md:w-1/2  bg-black grid grid-cols-12">
        <input
          ref={searchText}
          className="col-span-8 p-4 m-4"
          type="text"
          placeholder="What would you like to search today"
        />
        <button
          onClick={handleSearch}
          className=" col-span-4 m-4 bg-red-600 text-white p-3 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
