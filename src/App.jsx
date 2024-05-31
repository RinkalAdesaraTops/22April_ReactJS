import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Mycomponent from './Mycomponent'
import MyClassComponent from './MyClassComponent'
import LifecycleComponent from './LifecycleComponent'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import { FunctionComponent } from './FunctionComponent'
// import { BrowserRouter, Routes,Route, HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Home} from './Home'
import { About } from './About'
// import { Contact } from './Contact'
import { Menu } from './Menu'
import MyNewStyleComponent from './MyNewStyleComponent'
import HomeComponent from './HomeComponent'
import UseEffectExample from './UseEffectExample'
import ApiComponent from './ApiComponent'
import UseEffectDemo from './UseEffectDemo'
import Aboutdata from './Aboutdata'
import AboutInfo from './AboutInfo'

// 2+3*4 - eval(2+3*4 )
function App() {
  let userobj = {
    
  }
  return (
    <>
   
    <div>
      {/* <h1>Hello </h1> */}
      {/* <MyClassComponent userdata="testingdata"/> */}
      {/* <LifecycleComponent course="MernStack"/> */}
      {/* <Mycomponent myname="testing"/> */}
     {/* <FunctionComponent /> */}
     <BrowserRouter>
     <Menu />
     <Routes>
        <Route path='/about' element={<About/>}>
          <Route path='aboutdata' element={<Aboutdata/>} />
          <Route path='aboutinfo' element={<AboutInfo/>}/>
        </Route>
        {/* <Route path='/contact' element={<Contact />}></Route> */}
        <Route path='/home' element={<HomeComponent />}></Route>
        <Route path='/useeffectdemo' element={<UseEffectDemo />}></Route>
       
      </Routes>
   </BrowserRouter>
    </div>
    </>
  )
}

export default App
