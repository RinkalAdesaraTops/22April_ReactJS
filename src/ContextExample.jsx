import React, { useState } from 'react'

const ContextExample = () => {
    const [user,setUser] = useState("Rinkal Soni")
    return (
    <div>
      <h3>UseContext example</h3>
      <h4>User 1 - {user}</h4>
      <Component2 user={user}/>
    </div>
  )
}
const Component2 = ({user})=>{
    return(
        <div>COmponent 2 called...
            <Component3 user={user} />
        </div>
    )
}
const Component3 = ({user})=>{
    return(
        <div>COmponent 3 called...
            <Component4 user={user}/>
        </div>
    )
}
const Component4 = ({user})=>{
    return(
        <div>
            <h3>COmponent 4 called...</h3>
            <h4>Final User is {user}</h4>
        </div>
    )
}



export default ContextExample
