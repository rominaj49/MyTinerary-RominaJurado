import {cities} from '../../data/data'
import { useState, useEffect } from 'react'
import CarouserItem from './CarouserItem'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Carouser = () => {

  const cantCards = 4; //CANT CARDS Q MUESTRO EN LA PAG X SLIDER
  const totalCities = 12; 
  const [startIndex, setStartIndex] = useState(0);

  const citys = cities.slice(0, totalCities); 
  const currentCities = citys.slice(startIndex, startIndex + cantCards);

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
        <h2 className="text-5xl font-bold mb-10 text-gray-900 text-right mr-16">
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
            <ArrowForwardIosIcon color="error" />
          </button>
        </div>
      </article>
    </section>
  );
};

export default Carouser;