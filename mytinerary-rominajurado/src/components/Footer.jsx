import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

const Footer = () =>{
    return (



<footer class="bg-white dark:bg-rose-600">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="" class="flex items-center">
                  <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">MYTINERARY</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">Navigate</h2>
                  <ul class="text-white font-medium">
                      <li class="mb-4">
                          <a href="#section-home" class="hover:underline">Home</a>
                      </li>
                      <li>
                          <a href="" class="hover:underline">Cities</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-lg  font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
                  <ul class="text-white font-medium">
                      <li class="mb-4">
                          <a href="" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-lg  font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-white font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6  sm:mx-auto  lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-white sm:text-center">©2023 All Rights Reserved
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="">
              <div>
                <FacebookOutlinedIcon color="action" />
              </div>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class=" ms-5">
              <div>
                <LinkedInIcon color="action" />
              </div>
                  <span class="sr-only">Linkedin page</span>
              </a>
              <a href="#" class=" ms-5">
              <div>
                <TwitterIcon color="action" />
              </div>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="ms-5">
                <div>
                <GitHubIcon color="action" />
                </div>
                  <span class="sr-only">GitHub account</span>
              </a>
          </div>
      </div>
    </div>
</footer>



    );
}
export default Footer;