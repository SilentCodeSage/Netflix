import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice"; 

const useTrailerVideo = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const getTrailorData = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=717201877c6a679887571d65a997aebb&language=en-US`
          );
          if (!response.ok) {
            throw new Error('Failed to fetch trailer data');
          }
          const json = await response.json();
          if (json.results && json.results.length > 0) {
            const trailerKey = json.results[0].key;
            dispatch(addTrailer(trailerKey));
          }
        } catch (error) {
          console.error('Error fetching trailer data:', error);
        }
      };

      getTrailorData();
    }
  }, [id, dispatch]); // Dependency on `id` and `dispatch`

};

export default useTrailerVideo;
