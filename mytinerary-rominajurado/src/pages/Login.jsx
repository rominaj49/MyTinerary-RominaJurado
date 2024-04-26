import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authQueries from "../services/authQueries";
import alerts from "../utils/alerts";
import { useDispatch } from "react-redux";
import {login} from '../redux/actions/userActions';
import TokyoStation from "../assets/img/travel.jpg";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    const aux = { ...formData };
    aux[name] = value;
    setFormData(aux);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const aux = { ...formData };
    for (const key in aux) {
      if (!aux[key]) delete aux[key];
    }
    authQueries.login(aux).then((response) => {
      console.log(response);
      if (response.status == 200) {
        dispatch(login(response.data));
        alerts.success("Welcome " + response.data.first_name);
        navigate("/");
      } else {
        alerts.error(response.statusMsg);
      }
    });
  }
  function loginInWithGoogle(response) {
    console.log("Ok", response);
    const userInfo = jwtDecode(response.credential);
  
    const data = {
      email: userInfo.email,
      password: String(Number(userInfo.sub) / 3).substring(0, 15),
    };
  
    authQueries.login(data).then((response) => {
      console.log(response);
      if (response.status == 200) {
        dispatch(login(response.data));
        alerts.success("Welcome " + response.data.first_name);
        navigate("/");
      } else {
        alerts.error(response.statusMsg);
      }
    });
  }

  return (
    <main className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center relative" style={{ backgroundImage: `url(${TokyoStation})` }}>
    <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>
  
    <div className="w-full md:w-4/5 lg:w-2/4 xl:w-3/5 flex flex-col md:flex-row z-20 ">
      {/* Parte Izquierda */}
      <div className="bg-teal-500 p-20 rounded-tl-3xl w-full md:w-2/4 flex flex-col justify-center items-center text-white">
        <h2 className="text-3xl font-poppins font-bold mb-4">Welcome Back</h2>
        <p className="text-lg mb-8 font-poppins">Ready to create an account?</p>
        <div>
        <Link
          to="/register"
          className="bg-white font-poppins text-black h-10 rounded-lg font-medium text-lg px-8 py-2"
        >
          Register
        </Link>
        </div>
       
        <Link
          to="/"
          className="font-poppins text-white h-10 font-medium text-lg  m-4 py-2"
        >
          Back
        </Link>
      </div>
  
      {/* Parte Derecha (Formulario) */}
     
      <form
        onSubmit={handleSubmit}
        onInput={handleInput}
        className="bg-white rounded-br-3xl w-full md:w-3/4 flex flex-col justify-center items-center px-8 py-6"
      >
        <div className="font-poppins font-semibold text-3xl mb-5">
        <h1>Login</h1>
        </div>
        <input
          className="w-full h-10 bg-gray-100 outline-none rounded-lg mb-4 px-4"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="w-full h-10 bg-gray-100 outline-none rounded-lg mb-4 px-4"
          type="password"
          placeholder="Password"
          name="password"
        />
        
        <input
          type="submit"
          className="bg-teal-500 font-poppins hover:bg-teal-400 text-white h-10 rounded-lg font-medium text-lg px-8 cursor-pointer mb-4"
          value="Sign in"
        />
       <GoogleLogin 
        size = 'large'
         onSuccess={loginInWithGoogle}

         onError={() => {
          console.log("Error");
         }}
        />
      </form>
    </div>
  </main>
  );
}
export default Login;