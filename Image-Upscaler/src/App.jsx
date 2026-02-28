import React from 'react'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
  return <>
    <div className='flex h-screen items-center justify-center flex-col bg-gray-50 '>
      <h1 className='text-3xl font-bold text-gray-950'>AI Image Enhancer</h1>
      <p className='text-gray-700'>Upload your Image and let AI enhance in seconds !</p>
    </div>
    <Home/>
  <Footer/>
  </>
}

export default App