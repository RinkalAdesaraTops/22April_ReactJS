import { useEffect, useRef, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextDemo from './ContextDemo'
import ContextExample from './ContextExample'
import UseContextDemo from '../../src/UseContextDemo'
import UsememoExample from './UsememoExample'
import UseCallback from './UseCallback';
import LazyloadingComponent from './LazyloadingComponent';
import TaskComponent from './TaskComponent';
import LocalstorageExample from './LocalstorageExample';

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
      <h1>React Hooks Example</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} 
        </button> <br />
        A is {a.current}
        
      </div> */}
      {/* <ContextDemo /> */}
      {/* <ContextExample /> */}
      {/* <UseContextDemo /> */}
      {/* <UsememoExample />      */}
      <LocalstorageExample />
      {/* <LazyloadingComponent /> */}
      
    </>
  )
}

export default App
