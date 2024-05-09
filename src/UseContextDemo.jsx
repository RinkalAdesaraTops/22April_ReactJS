import {React, useState,createContext,useContext} from 'react'

const ColorContext = createContext();
const UseContextDemo = () => {
    const [color,setColor] = useState("red")
  return (
    <div>
        <ColorContext.Provider value={color}>
            <h3>Use Context Hooks Example</h3>
            <h3>Main Component</h3>
            <h4>Color is - {color}</h4>
            <Component2/>
      </ColorContext.Provider>
    </div>
  )
}
const Component2 = ()=>{
    return(
        <div>
            <h3>Component2 called..</h3>
            <Component3/>
        </div>
    )
}
const Component3 = ()=>{
    return(
        <div>
            <h3>Component3 called..</h3>
            <Component4 />
        </div>
    )
}
const Component4 = ()=>{
    const finalColor =  useContext(ColorContext)
    return(
        <div>
            <h3>Component4 called..</h3>
            <h4>Finally get Color name is -- {finalColor}</h4>
        </div>
    )
}

export default UseContextDemo
