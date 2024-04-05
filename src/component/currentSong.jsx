import React from 'react'

const CurrentSong = ({ toggleCurrent }) => {
  return (
    <div className={`w-[25%] h-[90vh] bg-black px-1 py-2 ${toggleCurrent? 'hidden' : 'flex'}`}>
        <div className='flex flex-col gap-2 w-[100%] h-[100%] px-5 py-5 bg-gray-900 rounded-md text-gray-200'>
            <h1 className='text-2xl font-semibold'>Current Song</h1>
            <div className='w-[100%] h-[30vh] bg-gray-950 rounded-md'>
              
            </div>
        </div>
    </div>
  )
}

export default CurrentSong