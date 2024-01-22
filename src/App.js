import {useState} from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(0);

  function decreaseHandler(){
    setCounter(counter-1);
  }

  function increaseHandler(){
    setCounter(counter+1);
  }

  function resetHandler(){
    setCounter(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] justify-center items-center flex  flex-col bg-[#030308] gap-10">
     <div className='text-[#0398d4] text-2xl font-medium'>Increment AND Decrement</div>
     <div className='flex flex-row  bg-white gap-12 py-3 rounded-sm text-[25px] text-[#344541] '>
      <button onClick={decreaseHandler}
      className='border-r-2 text-5xl border-[#bfbfbf] w-20'>-</button>
      <div className='font-bold text-5xl '>
      {counter}
      </div>
      <button onClick={increaseHandler}
      className='border-l-2 text-5xl border-[#bfbfbf] w-20'>
       +
      </button>
     </div>
     <div>
      <button onClick={resetHandler}
      className='bg-[#0398d4] px-5 py-2 text-white rounded-sm text-lg'>
        Reset
      </button>
     </div>
      
    </div>
  );
}

export default App;
