import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cities from './pages/Cities';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CitieDetail from './components/CitieDetail';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/cities' element={<Cities/>}></Route>
        <Route path='/cities/:id' element={<CitieDetail/>}></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
