import './assests/style.css';
import Bubble from './assests/images/bubble.png';
import Deer from './assests/images/deer.jpg'
import React from 'react'
import { useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const navigate = useNavigate();
 return (
  <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden" >
  <div name='home' className='w-full h-screen z-50'>
    {/* Container */}
    <div   className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <div className='flex justify-between items-center mx-10'>
      <button onClick={() => navigate('/files')}  type="button" class="text-[#ffae2c] hover:text-white border border-yellow-400 hover:bg-[#ffae2c] focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-black dark:hover:bg-[#ffae2c] dark:focus:ring-yellow-900">
      Click here to view saved images
        </button>
        <button onClick={() => navigate('/camera')}  type="button" class="text-[#ffae2c] hover:text-white border border-yellow-400 hover:bg-[#ffae2c] focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-black dark:hover:bg-[#ffae2c] dark:focus:ring-yellow-900">
          Get Started
        </button>
      </div>
    </div>
  </div>
  <img className="absolute -z-2 w-auto min-w-full min-h-full max-w-none" src={Deer} alt={Deer} />


<div className='bg-[rgba(0,0,0,0.5)] w-[100%] h-[100vh] fixed -z-1'>
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