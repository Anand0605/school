
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Home from './components/Home'
import About from './components/About'
import Teacher from './components/Teacher'
import Holidays from './components/Holidays'
import ContactUs from './components/ContactUs'
import NotFound from './components/NotFound'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='teacher' element={<Teacher/>}/>
      <Route path='holidays' element={<Holidays/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      <Route path='*' element={<NotFound/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App



























