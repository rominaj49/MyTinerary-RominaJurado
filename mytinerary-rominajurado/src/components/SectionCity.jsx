import { getCities } from "../services/citiesQueries";
import { useState, useEffect, useRef } from 'react';
import CityItem from '../components/City/CityItem';
import { useSelector, useDispatch } from "react-redux";
import { filterByName, load } from '../redux/actions/citiesActions';

const SectionCity = () => {
  const inputBusqueda = useRef(null);

  const dispatch = useDispatch();
  const {all, filtered, search} = useSelector((store) => store.cities);


  useEffect(() => {
    if(all.length == 0 ){
      getCities().then((data) => {
        dispatch(load(data));
      });
    }   
  }, []);

  const handleInput = () => {
    dispatch(filterByName(inputBusqueda.current.value));
  };

  const citiesCards = filtered.map((citie) => (
    <CityItem key={citie.id} city={citie} />
  ));

  return (
    <div className="bg-gray-200 " id="section-city">
      <div className="flex flex-col sm:flex-row">
        <div className="flex justify-center items-center">
          <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-3 sm:mb-1 text-left ml-14">Explore Bookable Trips</h2>
        </div>

        <div data-aos="zoom-in" className="flex h-12 p-2 rounded-lg shadow-2xl bg-gray-100  m-10">
          <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            className="outline-none rounded text-sm text-gray-700 pr-2 w-full p-3 bg-gray"
            type="text"
            id="search"
            onInput={handleInput}
            ref={inputBusqueda}
            defaultValue={search}
            placeholder="Search City.."
          />
        </div>
      </div>

      <section className="h-auto py-6 flex flex-wrap first-line:items-center justify-center ">
        {filtered.length > 0 ? (
          <>{citiesCards}</>
        ):(
          <h3 className="text-gray-700 font-poppins">There's not cities that match the search: "{search}"
          </h3>
        )}
      </section>
    </div>
  );
}
export default SectionCity;