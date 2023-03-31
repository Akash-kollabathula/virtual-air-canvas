import React from 'react'
import img from './assests/images/img0.jpg'

export default function Camera() {
  return (
    <>
    <h3 className='text-white font-bold bg-white'>hello world</h3>
    <div>

        <img src='http://localhost:5000/video' alt='camera' width='750'/>
        <img src={img} alt='paint' width='750%'/>
    </div>
    
    </>
  )
}
