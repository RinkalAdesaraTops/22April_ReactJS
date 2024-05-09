import React, { createContext, useContext, useState } from 'react'
const uContext = createContext()
const Context2 = () => {
    const [user,setUser] = useState("Rinkal Soni")
    return (
    <div>
        <uContext.Provider value={user}>
            <h3>UseContext example</h3>
            <h4>User 1 - {user}</h4>
            <Component2/>
        </uContext.Provider>
    </div>
  )
}
const Component2 = ()=>{
    return(
        <div>COmponent 2 called...
            <Component3 />
        </div>
    )
}
const Component3 = ()=>{
    return(
        <div>COmponent 3 called...
            <Component4 />
        </div>
    )
}
const Component4 = ()=>{
    const getUser = useContext(uContext)
    return(
        <div>
            <h3>COmponent 4 called...</h3>
            <h4>Final User is {getUser}</h4>
        </div>
    )
}



export default Context2
