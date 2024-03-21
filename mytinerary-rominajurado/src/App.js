import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cities from './pages/Cities';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CitieDetail from './pages/CitieDetail';
import {Provider, useDispatch} from 'react-redux';
import Register from './pages/Register';
import Login from './pages/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { login } from "./redux/actions/userActions";
import authQueries from "./services/authQueries";
import alerts from "./utils/alerts";

function App() {
  const dispatch = useDispatch();
  /*const user = userSelector((store) => store.user.user);*/

  useEffect(() => {
    authQueries.loginWithToken().then((res) => {
      if (res.status == 200) {
        dispatch(login(res.data));
        alerts.success("Welcome " + res.data.first_name);
      }
    });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cities' element={<Cities/>}></Route>
        <Route path='/cities/:id' element={<CitieDetail/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
     <ToastContainer/>
    </BrowserRouter>

  );
}

export default App;
