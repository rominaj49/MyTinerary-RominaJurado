import { useState, useEffect } from 'react'
import CarouserItem from './CarouserItem'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { getCities } from "../../services/citiesQueries"
import { load } from '../../redux/actions/citiesActions';
import { useSelector, useDispatch } from "react-redux";

const Carouser = () => {

  const dispatch = useDispatch();
  const cantCards = 4; //CANT CARDS Q MUESTRO EN LA PAG X SLIDER
  const totalCities = 12; //total a mostrar por slider
  const [startIndex, setStartIndex] = useState(0);
  const city = useSelector((store) => store.cities.all);

 console.log(city)//sii me muesrtra


 const citys = city.slice(0, totalCities);
 const currentCities = citys.slice(startIndex, startIndex + cantCards);

  useEffect(() => {
      getCities().then((data) => {
        dispatch(load(data));
      }) 
  }, []);


  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - cantCards);
    }
  };

  const next = () => {
    if (startIndex + cantCards < totalCities) {
      setStartIndex(startIndex + cantCards);
    }
  };

  return (
    <section className="my-24 mx-auto">
      <div>
        <h2 className="text-5xl font-bold mb-10 text-gray-900 text-right mr-16 font-poppins">
          Popular
          <strong className="font-bold text-teal-600"> Mytineraries </strong>
        </h2>
      </div>

      <article>
        <div className="flex flex-wrap justify-center items-center gap-5 p-5">
          <button onClick={prev} disabled={startIndex === 0} >
            <ArrowBackIosNewIcon color="error" />
          </button>
          {currentCities.map((city, index) => (
            <CarouserItem key={index} city={city} index={index} />
          ))}
          <button onClick={next} disabled={startIndex + cantCards >= totalCities}>
            <ArrowForwardIosIcon color="error"/>
          </button>
        </div>
      </article>
    </section>
  );
};

export default Carouser;