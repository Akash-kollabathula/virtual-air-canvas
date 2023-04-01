import './assests/style.css';
import Bubble from './assests/images/bubble.png';
// import Deer from './assests/images/deer.jpg'
import React from 'react'
import videomp4 from './assests/video/home-video.mp4'
import videoOgv from './assests/video/home-video.ogv'
import videowebm from './assests/video/videos_home-video.webm'

import { useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const navigate = useNavigate();
 return (
  <header className="relative flex items-center justify-center h-screen mb-12" >
  <div className='absolute w-full flex items-center justify-center   z-50'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ffae2c]'>
              Virtual Air Canvas
            </h1>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
            Writing in air has been one of the most fascinating and challenging research areas in field of image processing and pattern recognition in the recent years. It contributes immensely to the advancement of an automation process and can improve the interface between man and machine in numerous applications.
            </p>
      <div className='flex items-center mx-10 '>
        
        <button onClick={() => navigate('/files')}  className="relative inline-flex mr-[100px] items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Click here to view saved images
          </span>
        </button>
        <button onClick={() => navigate('/camera')}  className="relative inline-flex  items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Get started
          </span>
        </button>
      </div>
    </div>
  </div>
  {/* <img className="absolute -z-2 w-auto min-w-full min-h-full max-w-none" src={Deer} alt={Deer} /> */}

  <video autoPlay loop muted className="absolute -z-2 w-auto min-w-full min-h-screen max-w-none">
    <source src={videomp4} type="video/mp4" />
    <source src={videoOgv} type="video/ogv" />
    <source src={videowebm} type="video/webm" />
    Your browser does not support the video tag.
    </video>


<div className='bg-[rgba(0,0,0,0.8)] w-[100%] h-screen fixed -z-1'>
</div>

<div className='bubbles'>
          <img src={Bubble} alt='bubble' />
          <img src={Bubble} alt='bubble' />
          <img src={Bubble} alt='bubble' />
          <img src={Bubble} alt='bubble' />
          <img src={Bubble} alt='bubble' />
          <img src={Bubble} alt='bubble' />
          <img src={Bubble} alt='bubble' />
        </div>
</header>

   
  );
}

export default App;








{/* 
<div className='testing' >
      <img src={Deer} alt={Deer} style={{ backgroundSize:'cover'}}/>
        <button id='btn1' onClick={() => navigate("/files")} className='bg-white' type='submit'>
          Click here to view saved images
        </button>

        <button id='btn2'  onClick={() => navigate("/camera")}  className='button2' type='submit'>
          Get started
          </button>

        <div className='box'>
          <span className='replies'>Note</span>
          <span className='comment'>Click 'B' to exit</span>
        </div>
        <div className='container'>
          <img
            src='https://infoaryan.com/wp-content/uploads/2020/06/aircanvas.jpg'
            height='200px'
            width='200px'
            alt='background'
          />
          <div className='overlay'>
            <div className='text'>Virtual Air Canvas</div>
          </div>
        </div>
        <div className='bubbles'>
          <img src={Bubble} alt='bubble' />
          <img src={Bubble} alt='bubble' />
          <img src={Bubble} alt='bubble' />
          <img src={Bubble} alt='bubble' />
          <img src={Bubble} alt='bubble' />
          <img src={Bubble} alt='bubble' />
          <img src={Bubble} alt='bubble' />
        </div>
        </div>  
    </> */}