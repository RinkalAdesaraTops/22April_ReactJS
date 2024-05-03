import React, { useEffect,useState } from 'react'

const UseEffectExample = () => {
    const [counter,setCounter] = useState(0)
    const addClick = ()=>{
        setCounter(counter+1)
    }
    useEffect(()=>{
        console.log("Use effect called..");

        // setTimeout(()=>{
        //     console.log("Use effect called..");
        //     setCounter(counter+1)
        // },5000)
        
    },[addClick])
   
  return (
    <div>
      <h3>Counter is {counter}</h3>
      <button onClick={addClick}>Click</button>
    </div>
  )
}

export default UseEffectExample
