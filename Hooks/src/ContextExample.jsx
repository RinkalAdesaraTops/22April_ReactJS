import {React, useState} from 'react'

const ContextExample = () => {
    const [color,setColor] = useState("red")
  return (
    <div>
      <h3>Use Context Hooks Example</h3>
      <h3>Main Component</h3>
      <h4>Color is - {color}</h4>
      <Component2 color={color}/>
    </div>
  )
}
const Component2 = ({color})=>{
    return(
        <div>
            <h3>Component2 called..</h3>
            <Component3 color={color}/>
        </div>
    )
}
const Component3 = ({color})=>{
    return(
        <div>
            <h3>Component3 called..</h3>
            <Component4 color={color}/>
        </div>
    )
}
const Component4 = ({color})=>{
    return(
        <div>
            <h3>Component4 called..</h3>
            <h4>Finally get Color name is -- {color}</h4>
        </div>
    )
}

export default ContextExample
