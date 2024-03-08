

const Banner = () => {
    return(
        <section class="relative bg-[url(https://source.unsplash.com/7H77FWkK_x4/1600x900)] bg-cover bg-center bg-no-repeat">
  <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

  <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl font-semibold sm:text-5xl"> Exploring Each Stop on...
        <strong class="block font-extrabold text-teal-700 "> MY TINERARY! </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl/relaxed font-semibold font-mono"> Find your perfect trip, designed by insiders who know and love their cities!</p>

      <div class="mt-8 flex flex-wrap gap-4 text-center justify-center">
        <a href="#section-call"  class="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-500 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto">
          Get Started
        </a>
        <a href="#" class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-800 shadow hover:text-teal-500 focus:outline-none focus:ring active:text-teal-500 sm:w-auto">
          View Cities
        </a>
      </div>
    </div>
  </div>
</section>
    
);
}
export default Banner;