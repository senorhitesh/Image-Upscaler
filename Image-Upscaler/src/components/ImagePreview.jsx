import React from 'react'

const ImagePreview = () => {
  return (
    <div className='mt-8 grid-cols-1 grid md:grid-cols-2 gap-6 w-full max-w-4xl  '>
      <div  className='bg-white h-full ' >
        <h2 className='bg-neutral-800 text-center rounded-t-2xl w-full text-white font-medium px-4 py-1 flex flex-col'>Original Image</h2>
        <img src="" alt="" className='object-fit w-full h-full ' />
      </div>

      <div className='bg-white h-full ' >
        <h2 className='bg-purple-800 text-center rounded-t-2xl w-full text-white font-medium px-4 py-1 flex flex-col'>Enhanced Image</h2>
        <img src="" alt="" className='object-fit w-full h-full ' />
      </div>
    </div>
  )
}

export default ImagePreview