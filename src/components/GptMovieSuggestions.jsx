import React from "react";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const movies = useSelector((store) => store.gpt.gptSearchResults);
  console.log(movies);
  return (
    <div className="">
      {movies && (
        <div className="rounded-2xl mt-20 h-full px-4 lg:px-8 transition-all duration-500 ease-in-out">
        <div className="bg-gray-900 bg-opacity-85 p-6 rounded-lg shadow-lg overflow-y-scroll h-[600px]">
          <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-6">
            {movies &&
              movies.map((data) =>
                data.Poster !== "N/A" ? (
                  <div
                    key={data.imdbID}
                    className="flex flex-col items-center mx-auto max-w-xs md:w-64 w-64 md:h-96  bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105"
                  >
                    <div className="w-64 md:w-64  h-80">
                      <img
                        className="w-full h-full object-cover"
                        src={data.Poster}
                        alt={data.Title}
                      />
                    </div>
                    <div className="w-full p-4">
                      <h1 className="text-xl text-center text-white font-semibold">
                        {data.Title}
                      </h1>
                    </div>
                  </div>
                ) : null
              )}
          </div>
        </div>
      </div>
      
      )}
      {!movies && (
        <div className=" flex justify-center mt-20 md:mt-36">
          <div className="bg-gray-900 bg-opacity-85 p-6 rounded-lg shadow-lg text-center text-white w-[80%]  md:w-1/2">
            <h2 className=" text-1xl md:text-4xl font-extrabold tracking-wider text-blue-500">
              How to Find Movies
            </h2>
            <p className="mt-4 text-base">
              To get started, type the name of a movie or a genre in the search
              bar above.
            </p>
            <p className="mt-2 text-base">
              For best results, try using specific keywords like "action,"
              "comedy," or the title of a movie you're interested in.
            </p>
            <p className="mt-2 text-base">
              You can also search by popular actors or directors to find movies
              featuring them.
            </p>

            <p className="mt-4 font-medium text-lg">Happy searching!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GptMovieSuggestions;
