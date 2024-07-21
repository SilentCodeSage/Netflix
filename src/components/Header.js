import React from 'react';
import { mainLogo } from '../utils/constants';

const Header = () => {
  return (
    <div className='pt-2 absolute w-full h-auto bg-gradient-to-b from-black z-10'>
        <img className='ml-96 w-48 ' src={mainLogo} alt='Main-Logo'></img>
    </div>
  )
}

export default Header