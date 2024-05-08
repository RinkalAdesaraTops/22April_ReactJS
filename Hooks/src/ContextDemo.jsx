import React, { createContext, useContext } from 'react'
// 5 component
//c1 username c2 -username c3-username c4-username c5 - username
const Username = createContext()
const C2 = (props)=>{
    console.log('component 2 called..'+props.username);
    <C3 username={props.username}/>
}
const C3 = (props)=>{
    console.log('component 3 called..');
    <C4 username={props.username}/>

}
const C4 = (props)=>{
    console.log('component 4 called..'+props.username);
}
const ContextDemo = () => {
    const user = useContext()
  return (
    <div>
      <h3>Use Context Demo</h3>
      <Username.Provider name={user}>
        
      </Username.Provider>
    </div>
  )
}



export default ContextDemo
