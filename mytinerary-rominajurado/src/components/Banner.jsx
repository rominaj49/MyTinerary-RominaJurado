import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {

  const scroll = () => {
    const section = document.getElementById('section-call');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return(
  <section className="relative bg-[url(https://source.unsplash.com/7H77FWkK_x4/1600x900)] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

  <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-semibold sm:text-5xl font-poppins"> Exploring Each Stop on
        <strong className="block font-extrabold text-teal-700 mt-4 font-sans"> MY TINERARY! </strong>
      </h1>
      <p className="mt-4 max-w-lg sm:text-xl/relaxed font-poppins "> Find your perfect trip, designed by insiders who know and love their cities!</p>

      <div className="mt-8 flex flex-wrap gap-4 text-center justify-center" >  
            <button  onClick={scroll} href="#section-call"  className=" block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-500 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto">
              Get Started
            </button>
            <Link to='/cities' className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-800 shadow hover:text-teal-500 focus:outline-none focus:ring active:text-teal-500 sm:w-auto">
            View Cities
            </Link>
      </div>
    </div>
  </div>
</section>
    
);
}
export default Banner;