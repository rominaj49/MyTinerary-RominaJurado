import React, { useState, useEffect } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const ItinerarieItem = ({ itinerary }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselActive, setCarouselActive] = useState(false);

  useEffect(() => {
    let interval;

    if (carouselActive) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % itinerary.activities.length);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [carouselActive, itinerary.activities.length]);

  const stopCarousel = () => {
    setCarouselActive(false);
  };

  const startCarousel = () => {
    setCarouselActive(true);
  };


  return (
    <>
    <div className="bg-white w-96 h-95 shadow-md rounded-lg m-3 hover-scale" onMouseEnter={startCarousel} onMouseLeave={stopCarousel} data-aos="zoom-in">
      <div className="h-5/6">
        <img
          src={itinerary.activities[currentImageIndex]}
          alt="Imagen de la actividad"
          className="w-full h-80 object-cover object-top mb-3"
        />
      </div>

      <div className="w-full h-1/5 p-3 flex flex-col justify-between">

        <div className="flex items-center mb-2">
          <span className="text-xl font-medium font-poppins suppercase">{itinerary.title}</span>
        </div>

        <p className="text-gray-600 font-poppins">{itinerary.description}</p>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <AccessTimeIcon color="disabled" />
            <span className="text-gray-400 ml-2 font-poppins">{itinerary.duration + ' hr'}</span>
          </div>

          <div className="flex items-center">
            <AttachMoneyIcon color="disabled" />
            <span className="text-gray-400">{itinerary.price}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {/* parte d los hashtags */}
          {itinerary.hashtags.map((tag, index) => (
            <span key={index} className="bg-gray-200 py-1 px-2 rounded-full text-gray-600 font-roboto text-sm">{tag}</span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-gray-500 font-montserrat">Guide</span>
          <div className="flex items-center">
            <img className="w-8 h-8 rounded-full ml-2 mr-2" src={itinerary.guide_image} alt={"foto del guía: " + itinerary.guide} />
            <span className="text-gray-700 font-poppins">{itinerary.guide}</span>
          </div>
        </div>

      </div>
    </div>
</>

  );
}
export default ItinerarieItem;