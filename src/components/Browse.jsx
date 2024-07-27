import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  //fetch data from TMDB and update the store
  useNowPlayingMovies();
  //usePopularMovies();
  const isGPTpage = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="relative overflow-hidden">
      <Header />
      {isGPTpage === true ? (
        <GptSearch />
      ) : (
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
