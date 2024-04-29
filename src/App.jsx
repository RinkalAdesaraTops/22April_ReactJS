import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './Mycomponent'
import MyClassComponent from './MyClassComponent'
import LifecycleComponent from './LifecycleComponent'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Home'   
import Layout from './Layout'

function App() {
  let userobj = {
    
  }
  return (
    <><div>
      {/* <h1>Hello </h1> */}
      {/* <MyClassComponent userdata="testingdata"/> */}
      {/* <LifecycleComponent course="MernStack"/> */}
      {/* <Mycomponent myname="testing"/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  path="/home" element={<Home />}>Home</Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
