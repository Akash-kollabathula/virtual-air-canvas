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
    return <div key={index} style={{border:'1px solid black',width:'fit-content',margin:'20px'}}>
         <img src={image} alt={image} />
    </div>
})

  return (
    <>
    <h1>Photos</h1>
    <div style={{display:'flex',flexWrap:'wrap'}}>
        {result}
    </div>
    </>
  )
}
