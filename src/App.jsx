import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './Mycomponent'
import MyClassComponent from './MyClassComponent'

function App() {
  
  return (
    <><div>
      <h1>Hello </h1>
      <MyClassComponent userdata="testingdata"/>
      {/* <Mycomponent myname="testing"/> */}
    </div>
    </>
  )
}

export default App
