import React, { createContext,useState,useContext } from 'react'
const UserContext = createContext()
const Component2 = () => {
    const userdata = useContext(UserContext)
  return (
    <div>
      Username is back -- {userdata}
    </div>
  )
}
const ContextHook = () => {
    const [user,setUser] = useState("anc@mail.com")
    
  return (
    <div>
        User is :{user}
        <UserContext.Provider value={user}>
        <Component2 />
        </UserContext.Provider>
    </div>
  )
}


export default ContextHook
