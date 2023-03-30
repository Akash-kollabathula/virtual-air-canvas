import React from 'react'
import img from './assests/images/img0.jpg'

export default function Camera() {
  return (
    <>
    <div>

        <img src='http://localhost:5000/video' alt='camera' width='750'/>
        <img src={img} alt='paint' width='750%'/>
    </div>
    
    </>
  )
}
