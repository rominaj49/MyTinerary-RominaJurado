import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return (



<footer className="bg-white dark:bg-rose-600 font-poppins">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center">
                  <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">MYTINERARY</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">Navigate</h2>
                  <ul className="text-white font-medium">
                      <li className="mb-4">
                      <Link to='/' className='hover:underline'>Home</Link>
                      </li>
                      <li>
                      <Link to='/cities' className='hover:underline'>Cities</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-lg  font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
                  <ul className="text-white font-medium">
                      <li className="mb-4">
                          <a href="" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-lg  font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-white font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6  sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">©2023 All Rights Reserved
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="">
              <div>
                <FacebookOutlinedIcon color="action" />
              </div>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className=" ms-5">
              <div>
                <LinkedInIcon color="action" />
              </div>
                  <span className="sr-only">Linkedin page</span>
              </a>
              <a href="#" className=" ms-5">
              <div>
                <TwitterIcon color="action" />
              </div>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="ms-5">
                <div>
                <GitHubIcon color="action" />
                </div>
                  <span className="sr-only">GitHub account</span>
              </a>
          </div>
      </div>
    </div>
</footer>



    );
}
export default Footer;