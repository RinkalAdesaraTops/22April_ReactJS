import React, { useEffect, useState } from 'react'

const UseEffectDemo = () => {
    const [name,setName] = useState("Test")
    useEffect(()=>{
        console.log('use effect call')
        setTimeout(()=>{
            setName("abc")
        },5000)
        
    })
  return (
    
    <div>
       
      Name is :{name}
    </div>
  )
}

export default UseEffectDemo
