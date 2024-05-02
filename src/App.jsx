import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Mycomponent from './Mycomponent'
import MyClassComponent from './MyClassComponent'
import LifecycleComponent from './LifecycleComponent'
import { FunctionComponent } from './FunctionComponent'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Home} from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { Menu } from './Menu'
import MyNewStyleComponent from './MyNewStyleComponent'
import HomeComponent from './HomeComponent'

// 2+3*4 - eval(2+3*4 )
function App() {
  let userobj = {
    
  }
  return (
    <>
    <Menu />
    <div>
      {/* <h1>Hello </h1> */}
      {/* <MyClassComponent userdata="testingdata"/> */}
      {/* <LifecycleComponent course="MernStack"/> */}
      {/* <Mycomponent myname="testing"/> */}
     {/* <FunctionComponent /> */}
     <BrowserRouter>
     
      <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route exact path="/" element={<HomeComponent />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/style" element={<MyNewStyleComponent />}></Route>
      </Routes>
     </BrowserRouter>
    </div>
    </>
  )
}

export default App
