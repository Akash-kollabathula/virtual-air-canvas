import './assests/style.css';
import Bubble from './assests/images/bubble.png';
import Deer from './assests/images/deer.jpg'
function App() {
 
 return (
    <>
    <div className='testing' >
      {/* <img src={Deer} alt={Deer} style={{ backgroundSize:'cover'}}/> */}
        <button id='btn1' className='button1' type='submit'>
         <a href='files'> Click here to view saved images</a>
        </button>

        <button id='btn2' className='button2' type='submit'>
          <a href='/camera'>Get Started</a>
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
    </>
  );
}

export default App;
