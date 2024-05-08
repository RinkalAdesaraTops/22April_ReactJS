import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
  const [name,setName] = useState("Test")
  let count = 0

    useEffect(()=>{
        
        setTimeout(()=>{
            setName("abc")
            
        },5000)
        count = count+1
        console.log('use effect call count --'+count)
        
        
    })
  return (
    
    <div>
       <input type="text"  name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
      Name is :{name} <br />
      Count is : {count}
    </div>
  )
}

export default UseEffectDemo
