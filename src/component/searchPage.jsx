import React from 'react';
import { FaSearch } from "react-icons/fa";


const SearchPage = () => {
  return (
    <div className='space-y-5 h-[100%] p-5 text-gray-200 font-bold text-3xl'>
        <div className='text-center'>
            <input className='w-[70vh] rounded-full px-5 py-3 outline-none text-gray-700 text-sm font-medium' type="text" placeholder='Q what do you want to listen to?'/>
        </div>
        <h1>Recent Searches</h1>
        <div className='grid grid-cols-6'>
            <div className='w-[25vh] h-[25vh] bg-gray-500 rounded-md animate-pulse'></div>
            <div className='w-[25vh] h-[25vh] bg-gray-500 rounded-md animate-pulse'></div>
            <div className='w-[25vh] h-[25vh] bg-gray-500 rounded-md animate-pulse'></div>
            <div className='w-[25vh] h-[25vh] bg-gray-500 rounded-md animate-pulse'></div>
            <div className='w-[25vh] h-[25vh] bg-gray-500 rounded-md animate-pulse'></div>
            <div className='w-[25vh] h-[25vh] bg-gray-500 rounded-md animate-pulse'></div>
        </div>
    </div>
  )
}

export default SearchPage