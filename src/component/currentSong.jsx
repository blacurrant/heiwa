import React from 'react'

const CurrentSong = ({ toggleCurrent }) => {
  return (
    <div className={`w-[25%] h-[90vh] bg-black px-1 py-2 ${toggleCurrent? 'hidden' : 'flex'}`}>
        <div className='flex flex-col gap-2 w-[100%] h-[100%] px-2 py-2 bg-gray-900 rounded-md text-gray-200'>
            CurrentSong
        </div>
    </div>
  )
}

export default CurrentSong