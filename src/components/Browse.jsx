import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  //fetch data from TMDB and update the store
  useNowPlayingMovies();

  return (
    <div className="relative">
      <Header />
      {/* 
        MainContainer
         = VideoBacground
         = Video Title
        Secondary Container
         = MovieList * n
           = cards*n
      */}
      <MainContainer />
    </div>
  );
};

export default Browse;
