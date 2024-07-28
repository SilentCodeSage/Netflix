import React, { useRef } from 'react';
import run from '../utils/geminiAI';


const GptSearchBar = () => {
  const searchText = useRef();

  const handleSearch = async()=>{
    //gives the searchText as prompt
    const result = await run(searchText.current.value);
    console.log(result)
  }
  return (
    <div className='pt-[10%] flex justify-center' onSubmit={(e) =>e.preventDefault()}>
        <form action="" className=' w-1/2 bg-black grid grid-cols-12'>
            <input ref={searchText} className='col-span-8 p-4 m-4' type="text" placeholder='What would you like to search today' />
            <button onClick={handleSearch} className='col-span-4 m-4 bg-red-600 text-white p-3 rounded'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar;