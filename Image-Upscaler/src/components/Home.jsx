import React, { use, useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import {enhancedImageAPI} from '../utiils/enhanceImageAPI.js'
const Home = () => {
  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setloading] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file))
    setloading(true)    
    try {
      const ehanceURL = await enhancedImageAPI(file);
      setEnhancedImage(ehanceURL);
      setloading(false)
    } catch (error) {
      console.log(error)
      alert(`You Got an Error`)
    }
  }
  return (
    <>
      <ImageUpload UploadImageHandler={ UploadImageHandler} />
      <ImagePreview loading={ loading} uploaded={uploadImage} enhanced={enhancedImage} />
    </>
  )
}

export default Home