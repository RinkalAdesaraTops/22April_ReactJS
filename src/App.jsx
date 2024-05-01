import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './Mycomponent'
import MyClassComponent from './MyClassComponent'
import LifecycleComponent from './LifecycleComponent'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import { FunctionComponent } from './FunctionComponent'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Home} from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { Menu } from './Menu'

function App() {
  let userobj = {
    
  }
  return (
    <><div>
      <BrowserRouter>
      <Menu />
      <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </BrowserRouter>
      {/* <h1>Hello </h1> */}
      {/* <MyClassComponent userdata="testingdata"/> */}
      {/* <LifecycleComponent course="MernStack"/> */}
      {/* <Mycomponent myname="testing"/> */}
     {/* <FunctionComponent /> */}
     <h3>App component called..</h3>
     <BrowserRouter>
     <Menu />
      <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
      </Routes>
     </BrowserRouter>
    </div>
    </>
  )
}

export default App
