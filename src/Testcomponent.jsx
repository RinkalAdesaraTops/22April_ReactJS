import React, { useState } from 'react'

const Testcomponent = () => {
  const [user,setUser] = useState("Rinkal Soni")
  return (
    <div>
      <h3>Test component</h3>
      <h4>User -- {user}</h4>
    </div>
  )
}

export default Testcomponent
