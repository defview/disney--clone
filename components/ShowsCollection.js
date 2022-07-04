import React from 'react'
import ShowThumbnail from './ShowThumbnail'

function ShowsCollection ({ results, title }) {
  return (
    <div className='relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto'>
        <h2 className='font-semibold'>{title}</h2>
        <div className='flex space-x-6 scrollbar-hide overflow-y-hidden 
        overflow-x-scroll p-2 -m-2 transition duration-700 ease-in-out
        hover:drop-shadow-md'>
          {results.map((result) => (
              <ShowThumbnail key={result.id} result={result} />
          ))}
        </div>
    </div>
  )
}

export default ShowsCollection 