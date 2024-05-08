import { useEffect, useRef, useState } from 'react'
import './App.css'
import ContextDemo from './ContextDemo'

function App() {
  const [count, setCount] = useState(0)
  //USE REF Hook Example
  let a = useRef(0)
  useEffect(()=>{
    console.log("Rerender calling...");
    a.current = a.current+5;
    console.log(a);
    console.log("a is "+a.current);
  })
  return (
    <>      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} 
        </button> <br />
        A is {a.current}
        
      </div>
      <ContextDemo />
      
    </>
  )
}

export default App