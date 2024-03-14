import { Link, useNavigate, useParams } from "react-router-dom";
import { getCitieById } from "../services/citiesQueries";
import { useEffect, useState } from "react";

const CitieDetail = () => {

  const params = useParams();
  const [citie, setCitie] = useState([]);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getCitieById(params.id).then((res) => {
      console.log(res)
      console.log(res._id)
      if (res._id) {
        setCitie(res);
      } else {
        console.log(res.citie)
        navigate("/cities");
      }
    })
      .finally(() => setCargando(false));
  }, []);

  /*if (cargando){
    return(
     <div className="grow pt-20">
          <h2 className="pt-20 text-4x1 text-black">cargando</h2>
     </div>
    );
  }*/
  return (
    <>
      {cargando ? (
        <div><h1>Loading</h1></div>
      ) :
        (
          <section className="h-screen mt-0 bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${citie.image})` }}>
            <div className="absolute inset-0 backdrop-filter backdrop-blur-md bg-black/75 sm:bg-transparent sm:from-black/75 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-1"></div>
            
            <div className="bg-white sm:w-full md:w-3/5 lg:w-3/5 h-auto sm:h-auto shadow-md rounded m-3 overflow-hidden transform">
              <div className="h-4/5 w-full">
                <img className="w-full h-full object-cover rounded-t" src={citie.image} alt={"imagen de: " + citie.name} />
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-lg font-montserrat font-semibold uppercase">{citie.name}</h1>
                <p className="text-black font-poppins"><a href="#">Under Destruction</a></p>
              </div>
            </div>

            <div className=" m-3 absolute bottom-0 lg:right-0 md:mt-40 sm:items-center">
              <Link to="/cities">
                <button className="bg-rose-700 hover:bg-rose-600 text-white font-poppins tracking-wider font-semibold text-lg py-3 px-6 rounded">
                Back</button></Link>
            </div>

          </section>
        )}
    </>
  );

};
export default CitieDetail;