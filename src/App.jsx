
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import React from 'react'
// import 'remixicon/fonts/remixicon.css'
// import Home from './components/Home'
// import About from './components/About'
// import Teacher from './components/Teacher'
// import Holidays from './components/Holidays'
// import ContactUs from './components/ContactUs'
// import NotFound from './components/NotFound'


// const App = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='teacher' element={<Teacher/>}/>
//       <Route path='holidays' element={<Holidays/>}/>
//       <Route path='contact' element={<ContactUs/>}/>
//       <Route path='*' element={<NotFound/>}/>
      
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [show, setShow] = useState(false)
  const [fontSize,setFontSize] = useState(20)

 
 
  const toggle=()=>{
setShow(!show)
  }
  
  return (
    <div>
      <h1 style={{fontSize:show? "100px":"16px"}}>Anand</h1>
      {show && <p style={{color:show ? "red":"yellow"}}>www.Anand.com</p>}

      <button onClick={toggle}>
        {show ? 'hide':'show'}
      </button>
      <p style={{fontSize :fontSize,color:fontSize===20 ? "red":'blue'}}>Lorem ipsum dolor sit amet.</p>
      <button onClick={()=>{setFontSize(fontSize===20 ? 100 :20)}}>button</button>
      
    </div>
  )
}

export default App

























