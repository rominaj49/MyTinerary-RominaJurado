import tokyoStation from '../assets/img/mos-design-fJYtYA4-ciE-unsplash.jpg'
import { Link } from "react-router-dom";

const CallToAction = () => {
  
    return(
<div className="container my-24 mx-auto md:px-6 " id="section-call"  >
<h2 className="text-5xl font-bold mb-10 text-gray-900 text-left ml-14 font-poppins">Cities</h2>
  <section className="mb-32">
    <div className="flex flex-wrap">
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
        <div className="flex lg:py-12" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
          <img src={tokyoStation}
            className="w-full rounded-lg shadow-lg dark:shadow-black/50 lg:ml-[50px] z-[10]" alt="image" />
        </div>
      </div>
      <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 bg-rose-600" >
        <div className="flex h-full items-center rounded-lg bg-primary p-6 text-center text-white lg:pl-12 lg:text-left" >
          <div className="lg:pl-12">
            <h2 className="mb-6 text-3xl font-bold font-poppins">
            Explore the World: Your Adventure Begins Here
            </h2>
            <p className="mb-6 pb-2 lg:pb-0 font-poppins">
            On our travel page, we invite you to embark on a unique odyssey full of extraordinary experiences.
            From picturesque destinations to fascinating cultures, we offer you the chance to unleash your adventurous 
            spirit and immerse yourself in the unknown. Are you ready to live unforgettable moments and create memories
            that will last a lifetime? Discover your next destination and make every journey a tale of adventure.
            </p>
            <Link to='/cities' data-aos="zoom-in"
              className="rounded-full border-2 font-poppins border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
              data-te-ripple-init data-te-ripple-color="light">
              Click Here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
);
}
export default CallToAction;