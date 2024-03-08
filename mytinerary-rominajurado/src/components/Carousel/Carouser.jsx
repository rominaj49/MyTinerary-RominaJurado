import {cities} from '../../data/data'
import { useState, useEffect } from 'react'

const Carouser = () => {

    const citys= cities.slice(0,12)
    const [city] = citys;
    console.log(city)
    return(

    <section>
      <div>
        <h2 class="text-5xl font-bold mb-10 text-gray-900 text-right mr-16">Popular 
        <strong class="font-bold text-teal-600 "> Mytineraries </strong>
        </h2>
      </div>
     
    <div class="flex flex-wrap justify-center gap-5 p-5">

    <article class="grow flex flex-col items-center bg-white text-black p-3 w-64">
      <img class="w-full h-80 object-cover object-top mb-3" src={city.image} alt={"Imagen de " + city.name} />
      <footer>
        <h3 class="text-xl font-bold">{city.name}</h3>
        <p class="text-lg">{city.country}</p>
      </footer>
    </article>

    <article class="grow flex flex-col items-center bg-white text-black p-3 w-64">
      <img class="w-full h-80 object-cover object-top mb-3" src={city.image} alt={"Imagen de " + city.name} />
      <footer>
        <h3 class="text-xl font-bold">{city.name}</h3>
        <p class="text-lg">{city.country}</p>
      </footer>
    </article>

    <article class="grow flex flex-col items-center bg-white text-black p-3 w-64">
      <img class="w-full h-80 object-cover object-top mb-3" src={city.image} alt={"Imagen de " + city.name} />
      <footer>
        <h3 class="text-xl font-bold">{city.name}</h3>
        <p class="text-lg">{city.country}</p>
      </footer>
    </article>

    <article class="grow flex flex-col items-center bg-white text-black p-3 w-64">
      <img class="w-full h-80 object-cover object-top mb-3" src={city.image} alt={"Imagen de " + city.name} />
      <footer>
        <h3 class="text-xl font-bold">{city.name}</h3>
        <p class="text-lg">{city.country}</p>
      </footer>
    </article>

  </div>
    </section>


    );
}
export default Carouser;