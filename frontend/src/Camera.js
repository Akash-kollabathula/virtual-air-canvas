import React from 'react'
// import img from './img0.jpg'
 import img from './assests/img0.jpg'
export default function Camera() {
  return (
    <>
    
    <div>

        <img src='http://localhost:5000/video' alt='camera' width='750'/>
        <img src={img} alt='paint' width='750%'/>
    {/* <h3 className='text-white font-bold bg-white'>hello world</h3> */}
    <div style={{display:'flex'}}>
        <img src='http://localhost:5000/video' alt='camera' width='850'/>
        <img src={img} alt='paint' width='700'/>
    </div>
    </>
  )
}
