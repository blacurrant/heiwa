import React from 'react';
import { useSelector } from 'react-redux';

const SongPage = () => {
  const state = useSelector(state => state?.todo?.data?.playlists?.items)

  console.log(state);
  return (
    <div className='w-[100%] h-[100%] flex flex-col gap-5 p-5 text-gray-200'>
      <div className='flex gap-5 w-[100%] h-[20vh]'>
        <img className='h-[100%] w-[20%] ' src="/" alt="coverart" />
        <h1>playlist name</h1>
      </div>
      <div>
        songs
      </div>
    </div>
  )
}

export default SongPage