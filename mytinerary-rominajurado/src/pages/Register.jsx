import { useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import getAllCountries from "../services/countriesQueries";
import authQueries from "../services/authQueries";
import alerts from "../utils/alerts";
import TokyoStation from "../assets/img/travel.jpg";

const Register = () => {

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    country: "",
  });
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCountries().then(setCountries);
  }, []);
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
    authQueries.register(aux).then((response) => {
      if (response.status == 201) {
        alerts.success("Account Created");
        navigate("/login");
      } else {
        alerts.error(response.statusMsg);
      }
    });
  }

  return (
    <main className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center relative" style={{ backgroundImage: `url(${TokyoStation})` }}>
    <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>
  
    <div className="w-full md:w-4/5 lg:w-2/4 xl:w-3/5 flex flex-col md:flex-row z-20 ">

      <div className="bg-teal-500 rounded-tl-3xl w-full md:w-2/4 flex flex-col justify-center items-center text-white">
        <h2 className="text-3xl font-poppins font-bold mb-4">Hello there!</h2>
        <p className="text-lg mb-8 font-poppins">Already have an account?</p>
        <Link
          to="/login"
          className="bg-white font-poppins text-black h-10 rounded-lg font-medium text-lg px-8 py-2"
        >
          Sign In
        </Link>
        <Link
          to="/"
          className="font-poppins text-white h-10 font-medium text-lg  m-4 py-2"
        >
          Back
        </Link>
      </div>
  
      
     
      <form
        onSubmit={handleSubmit}
        onInput={handleInput}
        className="bg-white rounded-br-3xl w-full md:w-3/4 flex flex-col justify-center items-center px-8 py-6"
      >
        <div className="font-poppins font-semibold text-4xl my-5">
        <h1>Create Account</h1>
        </div>
        <input
          className="w-full h-10 bg-gray-100 outline-none rounded-lg mb-4 px-4"
          type="text"
          placeholder="Name"
          name="first_name"
        />
        <input
          className="w-full h-10 bg-gray-100 outline-none rounded-lg mb-4 px-4"
          type="text"
          placeholder="Last Name"
          name="last_name"
        />
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
        <select
          className="w-full h-10 bg-gray-100 outline-none rounded-lg mb-4 px-4"
          name="country"
          defaultValue={formData.country}
        >
          {countries.length > 0 &&
            countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
        </select>
        <input
          className="w-full h-10 bg-gray-100 outline-none rounded-lg mb-4 px-4"
          type="text"
          name="image"
          placeholder="URL image"
        />
        <input
          type="submit"
          className="bg-teal-500 font-poppins hover:bg-teal-400 text-white h-10 rounded-lg font-medium text-lg px-8 cursor-pointer "
          value="Sign up"
        />
       
      </form>
    </div>
  </main>
  

  );
}

export default Register;