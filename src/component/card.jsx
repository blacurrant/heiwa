import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ list, toggleSidebar }) => {

  return (
    <Link to='/song' className={`flex items-center gap-5 w-[100%] h-[75px] rounded-md ${toggleSidebar ? 'py-1 w-[50px] h-[50px] justify-center bg-transparent'  : 'p-2 w-[100%] h-[75px] hover:bg-gray-700'}`}>
        <div className={` w-[50px] h-[50px] bg-gray-700 rounded-md`}>
          <img className='w-[50px] h-[50px] object-cover rounded-md' src={list?.data?.images?.items[0]?.sources[0]?.url} alt="" />
        </div>
        {toggleSidebar==false && `${list?.data?.name.length >= 20 ? list?.data?.name.slice(0,19)+'...' : list?.data?.name}`}
    </Link>
  )
}

export default Card