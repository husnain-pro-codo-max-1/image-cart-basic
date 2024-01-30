import React from 'react'

const ImageCart = ({children,imgSrc,...props}) => {
  return (
    <>
    <div {...props} className='relative max-w-xs overflow-hidden rounded-2xl group shadow-lg'>

            <img src={imgSrc} alt=""  className='transition-transform group-hover:scale-110 duration-400'/>

            <div className='absolute inset-0  bg-gradient-to-t from-black/60 to-transparent items-end flex'>
                <div className='w-full text-white p-4'>{children}</div>
            </div>

    </div>


    </>

  )
}

export default ImageCart