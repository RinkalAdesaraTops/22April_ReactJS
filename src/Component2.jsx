import React, { useContext } from 'react'

const Component2 = () => {
    const userdata = useContext(UserContext)
  return (
    <div>
      Username is back -- {userdata}
    </div>
  )
}

export default Component2
