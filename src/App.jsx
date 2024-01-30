import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ImageCart from './Components/ImageCart'
import './App.css'
import image from './assets/1.jpg'
import image1 from './assets/2.jpg'

import {Heart , Share2 ,MessageCircle ,Bookmark} from 'react-feather'

function App() {

  return (
    <>
    <main className='flex items-center justify-center bg-black/90 h-screen gap-5 '>
      <ImageCart imgSrc={image}>
      <h1 className='text-xl  font-bold mb-2'>Smiling Girl </h1>
      <p className='hidden sm:block md:block'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, corrupti.</p>
      
      <div className='flex mt-4 justify-between'>
        
        <div className='space-x-4'>

          <button><Heart/>
          </button>
        
          <button><MessageCircle/>
          </button>
          <button><Share2/>
          </button>
        </div>
      
        <div> <Bookmark/></div>
      </div>

      </ImageCart>
      <ImageCart imgSrc={image1}>
      <h1 className='text-xl  font-bold mb-2'>Smiling Girl </h1>
      <p className='hidden  sm:block md:block'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, corrupti.</p>
      
      <div className='flex mt-4 justify-between'>
        
        <div className='space-x-4'>

          <button><Heart/>
          </button>
        
          <button><MessageCircle/>
          </button>
          <button><Share2/>
          </button>
        </div>
      
        <div> <Bookmark/></div>
      </div>

      </ImageCart>
    </main>    
    </>
  )
}

export default App
