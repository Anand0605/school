import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import 'remixicon/fonts/remixicon.css';
import Home from './components/Home';
import Admission from './components/Admission';
import Result from './components/Result';  // Fixed typo from 'Rrsult' to 'Result'
import Teacher from './components/Teacher';
import Holidays from './components/Holidays';
import Facilities from './components/Facilities';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/result' element={<Result />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/holidays' element={<Holidays />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
