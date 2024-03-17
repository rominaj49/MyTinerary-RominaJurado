import bannerImage from "../../assets/img/simon-zhu-iaJH3_7EXSg-unsplash.jpg";

const BannerCity = () => {

  const scroll = () => {
    const section = document.getElementById('section-city');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return(
  <div >
<section className="relative bg-cover bg-center shadow-2xl " style={{ backgroundImage: `url(${bannerImage})` }}>
    <div className=" absolute inset-0 backdrop-filter backdrop-blur-sm bg-black/75 sm:bg-transparent sm:from-black/75 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

  <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
    <div className="max text-center ltr:sm:text-left rtl:sm:text-right">
     <h1 class=" mb-4 text-4xl  font-playfair-display-sc  font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-gray">
        Explore Unmissable Destinations and Rediscover the Excitement of Travel with MyTinerary 
        <span class="text-teal-600 dark:text-teal-600"> the world's #1 </span> in Travel Experiences.
     </h1>
     <div className="mt-8 flex flex-wrap gap-4 text-center justify-center" >  
        <button  onClick={scroll} href="#"  className=" block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-500 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto">
         Click here!
        </button>
     </div>
    </div>
  </div>
</section>
</div>
    
);
}
export default BannerCity;