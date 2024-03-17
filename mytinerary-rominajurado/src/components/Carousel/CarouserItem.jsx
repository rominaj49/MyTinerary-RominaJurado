import React from 'react';

const CarouserItem = ({ city, index }) => {
  return (
    <article className="grow flex flex-col items-center rounded-sm shadow-xl hover-scale bg-white text-black p-3 w-64 " data-aos="zoom-in">
      <img className="w-full h-80 object-cover object-top mb-3" src={city.image} alt={"Imagen de " + city.name} />
      <footer >
        <h3 className="text-xl font-bold font-poppins">{city.name}</h3>
        <p className="text-lg font-poppins">{city.country}</p>
      </footer>
    </article>
  );
}
export default CarouserItem;