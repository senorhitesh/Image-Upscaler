import React from 'react'
import Loading from './Loading'

const ImagePreview = (props) => {
  return (
    <>
        <div className='mt-8 grid-cols-1 grid md:grid-cols-2 gap-6 w-full max-w-4xl  '>
      <div  className='bg-white h-[400px] shadow-xl overflow-hidden  ' >
        <h2 className='bg-neutral-800 text-center rounded-t-2xl w-full text-white font-medium px-4 py-1 flex flex-col'>Original Image</h2>
          {props.uploaded ? (<img src={props.uploaded} alt="Image" className='object-cover w-full h-full ' />) : (<div className='text-center mt-1.5 text-gray-500'> <p>Upload Image to Preview</p> </div>)}
          
      </div>

      <div className='bg-white h-[400px] shadow-xl  flex flex-col items-center' >
        <h2 className='bg-purple-800 text-center rounded-t-2xl w-full text-white font-medium px-4 py-1 flex flex-col'>Enhanced Image</h2>
        {props.enhanced && props.loading &&  (<img src={props.uploaded} alt="Image" className='object-fit w-full h-full ' />)  }
          
          {props.loading ? <Loading/>:  <div className='text-center mt-1.5 text-gray-500'> <p>Upload Image to Enhance</p> </div> }
      </div>
    </div>
    </>
  )
}

export default ImagePreview