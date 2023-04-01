import React, { useEffect, useState } from 'react'
export default function Files() {

const [images,setImages]=useState([])


function importAll(r) { 
    let photo={}
  r.keys().forEach((key) => (photo[key] = r(key)));
   const result=[]
  for(const key in photo){
    result.push(`${photo[key]}`)
  }
  setImages(result)
  return photo
}
function datafetch(){
    importAll(require.context("./assests/photos", false, /\.(png|jpe?g|svg)$/));
    
    
    
}
useEffect(()=>{
   datafetch()
},[])
const result=images.map((image,index)=>{
    return <div  className=' shadow-md rounded'  key={index} style={{width:'fit-content',margin:'20px'}}>
         <img src={image} alt={image} />
    </div>
})

  return (
    <div className='bg-gray-500 p-3'>
    <h1 class='text-[#321fdb] text-center text-5xl font-bold py-4 '>PHOTOS</h1>
    <div className='flex flex-wrap justify-center'>
        {result}
    </div>
    </div>
  )
}
