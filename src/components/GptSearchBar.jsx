import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
        <form action="" className=' w-1/2 bg-black grid grid-cols-12'>
            <input className='col-span-8 p-4 m-4' type="text" placeholder='What would you like to search today' />
            <button className='col-span-4 m-4 bg-red-600 text-white p-3 rounded'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar;