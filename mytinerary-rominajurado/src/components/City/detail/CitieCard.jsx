import { Link, useNavigate, useParams } from "react-router-dom";
import { getCitieById, getItinerariesById } from "../../../services/citiesQueries";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCity } from '../../../redux/actions/citiesActions';
import ItinerarieItem from './ItinerarieItem';

const CitieCard = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const citie = useSelector((store) => store.cities.city);

  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();
  const [itineraries, setItineraries] = useState([]);





  useEffect(() => {
    getCitieById(params.id).then((res) => {
      if (res._id) {
        dispatch(loadCity(res))

        getItinerariesById(res._id).then((itineraries) => {
          setItineraries(itineraries);
        });

      } else {
        navigate("/cities");
      }
    })
      .finally(() => setCargando(false));
  }, []);

  const scroll = () => {
    const section = document.getElementById('section-itineraries');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {cargando ? (
        <div class="flex justify-center items-center h-screen bg-gray-200">
          <div role="status">
            <svg aria-hidden="true" class="inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
          </div>
        </div>

      ) :
        (
          <main className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center relative" style={{ backgroundImage: `url(${citie.image})` }}>
            <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>

            <div className="max-w-screen-xl font-poppins w-full mx-auto px-6  py-6 mt-12 bg-gray-200 rounded-lg overflow-hidden shadow-lg md:flex relative z-10">
              {/* izq */}
              <div className="md:w-2/4 relative z-10">
                <img className="w-full h-full object-cover" src={citie.image} alt={"imagen de: " + citie.name} />
              </div>
              {/* der */}
              <div className="md:w-1/2 p-4 relative z-10 flex flex-col justify-center items-center md:items-start">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{citie.country}</h1>

               
                <div className="flex flex-col">
                  <p className="font-semibold text-2xl text-gray-700 mb-2">{citie.name}</p>
                  <p className="text-gray-600 text-xl mb-2">{citie.description}</p>

                  <div className="flex justify-between mb-2 text-gray-600 text-lg">
                    <div className="flex items-center">
                      <span className="font-semibold mr-1">Currency:</span>
                      <span>{citie.currency}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold mr-1">Language:</span>
                      <span>{citie.language}</span>
                    </div>
                  </div>

                  <div className="flex justify-center md:justify-start mt-14">
                    {itineraries.length > 0 ? (
                      <button onClick={scroll} className="bg-rose-700 hover:bg-rose-600 text-white font-medium text-lg py-3 px-6 rounded">
                        View Itineraries
                      </button>
                    ) : (
                      <div className="flex flex-col">
                      <button className="bg-rose-300 text-white font-medium text-lg py-3 px-6 rounded pointer-events-none">
                          View Itineraries
                        </button>
                       
                        <div className="z-30 ml-2 text-sm mt-3 text-red-500">*Currently no itineraries are available*</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {itineraries.length > 0 ? (
              <>
              <div className="flex flex-col justify-center items-center z-40" id="section-itineraries">
              <h2 className="text-5xl font-bold text-white font-poppins mb-3 sm:mb-1 text-left mt-14 ml-14" data-aos="zoom-in">
                Book Your 
                <strong className=" font-bold text-rose-600 mt-4 font-poppins"> Journey </strong>
                Now!</h2>
              </div>
                <div className="flex flex-wrap justify-center items-center gap-5 p-5 mt-10" >                                
                  {itineraries.map((itinerary) => (
                    <ItinerarieItem key={itinerary._id} itinerary={itinerary} />))
                  }
                </div>
              </>

            ) : (
              <div><h1>esto no deberia mostrarsee</h1></div>
            )}
            <div className=" m-10 relative bottom-0lg:right-0 sm:items-center">
              <Link to="/cities">
                <button className="bg-rose-700 hover:bg-rose-600 text-white font-poppins tracking-wider font-semibold text-lg py-3 px-6 rounded">
                  Back</button>
              </Link>
            </div>


          </main>
        )}
    </>
  );

};
export default CitieCard;