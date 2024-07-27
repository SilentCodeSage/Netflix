import React from 'react'
import GptSearchBar from './GptSearchBar';
import { loginBackground } from '../utils/constants';

const GptSearch = () => {
  return (
    <div className='h-screen'>
        {/* <h1>GPT</h1> */}
        <div className="absolute -z-10">
        <img src={loginBackground} alt="Login-page"></img>
      </div>
        <GptSearchBar />
    </div>
  )
}

export default GptSearch;