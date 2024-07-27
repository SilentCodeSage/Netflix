import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({poster_path}) => {
  return (
    <div className='flex-none'>
        <img className='w-40 rounded-xl' src={IMG_CDN+poster_path} alt="MovieCard" />
    </div>
  )
}

export default MovieCard