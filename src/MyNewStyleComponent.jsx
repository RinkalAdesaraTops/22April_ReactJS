import React from 'react'
import styled from 'styled-components'
const MyNewStyleComponent = () => {
    const H1 = styled.h1`
            color:red;
            font-size:25px;
            `
  return (
    <div>
      <H1>My Styled Component</H1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim earum sint asperiores quo exercitationem vero eius laudantium aspernatur et! Corporis eveniet earum porro id totam. Quos dolorum obcaecati explicabo.</p>
      <button>Click</button>
    </div>
  )
}

export default MyNewStyleComponent
