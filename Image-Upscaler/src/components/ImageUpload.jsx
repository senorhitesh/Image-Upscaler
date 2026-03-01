import React from 'react'
import { Upload } from 'lucide-react';
const ImageUpload = () => {
  return (
    <div className='w-fit justify-center flex align-middle mt-8 bg-white px-4 py-4 rounded-md shadow-2xl' >
<label htmlFor="fileInput" className='px-4 rounded-xl border cursor-pointer hover:border-gray-700 font-medium text-neutral-900 border-dashed border-gray-400 transition py-4 text-center bg-white w-fit flex gap-1.5'><input type="file" id='fileInput' className='hidden'/> <p  className='text-center'>Click & Drag here to Upload Image</p> <p className='text-gray-800 scale-90'>   <Upload /></p></label>
    </div>

  )
}

export default ImageUpload

