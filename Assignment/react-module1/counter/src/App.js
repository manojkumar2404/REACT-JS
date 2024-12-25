import { useEffect, useState } from 'react';
import './App.css';


function App() {
   const [count, setcount] = useState(0);
   const incrementEvent =()=>{
      setcount(count+1)
   }

   const decrementEvent =()=>{
    setcount(count-1)
   }

   const resetEvent =()=>{
    setcount(0)
   }

   useEffect(()=>{
      if(count<0){
        setcount(0)
      }
   },[count])

  return (
    <div className="App">
      <h1>{count}</h1>
      <div className='btn'>
      <button onClick={incrementEvent}>Increment</button>
      <button onClick={decrementEvent}>Decrement</button>
      <button onClick={resetEvent}>Reset</button>
    </div>
    </div>
  );
}

export default App;
