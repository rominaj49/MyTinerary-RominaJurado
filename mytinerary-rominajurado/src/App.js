import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cities from './pages/Cities';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CitieDetail from './components/CitieDetail';
import {Provider} from 'react-redux';
import store from "./redux/store";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <BrowserRouter>
    <Provider store={store}>
      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/cities' element={<Cities/>}></Route>
        <Route path='/cities/:id' element={<CitieDetail/>}></Route>

      </Routes>
     </Provider>
    </BrowserRouter>

  );
}

export default App;
