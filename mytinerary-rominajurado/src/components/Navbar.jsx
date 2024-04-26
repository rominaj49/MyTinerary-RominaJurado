import logoPage from "../assets/img/logopage.png"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../redux/actions/userActions';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import userDefault from '../assets/img/defaultprofile.jpg';
import { useState } from "react";


const NavBar = () => {

	const handleClick = () => {
		dispatch(logout());
	};
	const location = useLocation();
	const user = useSelector((store) => store.user.user);
	const dispatch = useDispatch();

	//parte del menu

	const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú  
	const toggleMenu = () => {
		setMenuOpen(!menuOpen); // Alternar la visibilidad del menú
	};


	return (
		<nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
			<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap md:flex md:justify-between md:items-center">
				<div className="md:order-1">
					<img src={logoPage} alt="logo-travel" className="w-12 h-12" />
				</div>
				<div className="text-gray-500 order-3 w-full md:w-auto md:order-2 font-poppins md:block hidden">
					<ul className="flex justify-between">
						<li className="md:px-4 md:py-2 hover:text-teal-500 text-xl">
							<Link to="/">Home</Link>
						</li>
						<li className="md:px-4 md:py-2 hover:text-teal-500 text-xl">
							<Link to="/cities">Cities</Link>
						</li>
					</ul>
				</div>

				<div className="order-2 md:order-3 flex items-center">
					 {/* Icono del menú para pantallas pequeñas */}
					 <div className="md:hidden flex items-center ">
            <button className="px-2 focus:outline-none" onClick={toggleMenu}>
              <MenuIcon />
            </button>
          </div>

          {/* Menú desplegable */}
          {menuOpen && (
            <div className="md:hidden absolute inset-0 z-50 mt-20">
              <ul className="bg-gray-200 px-4 py-2 text-center font-poppins text-2xl">
                <li className="my-5 hover:text-teal-500">
                  <Link to="/">Home</Link>
                </li>
                <li className="my-10 hover:text-teal-500">
                  <Link to="/cities">Cities</Link>
                </li>
                {!user.first_name ? (
                  <>
                    <li className="my-10 hover:text-teal-500">
                      <Link to="/login">Login</Link>
                    </li>
                    <li className="my-10 hover:text-teal-500">
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                ) : (
                  <li className="my-10 hover:text-teal-500">
                    <button onClick={handleClick}>Logout</button>
                  </li>
                )}
              </ul>
            </div>
          )}

					<div className="md:flex hidden justify-between items-center">
						{!user.first_name ? (
							<>
								<Link
									to="/login"
									className="px-4 py-2 font-poppins bg-teal-600 hover:bg-teal-500 text-gray-50 rounded-xl flex items-center gap-2"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Login
								</Link>
								<Link
									to="/register"
									className="px-4 ml-1 py-2 font-poppins bg-teal-600 hover:bg-teal-500 text-gray-50 rounded-xl flex items-center gap-2"
								>
									Register
								</Link>
							</>
						) : (
							<>
								<div className="mr-4 rounded-full border border-gray-500">
									{user.image ? (
										<img
											src={user.image}
											alt="Image-User"
											className="w-11 h-11 object-cover rounded-full "
										/>
									) : (
										<img
											src={userDefault}
											alt="Image-Default"
											className="w-11 h-11 object-cover rounded-full"
										/>
									)}
								</div>
								<button
									onClick={handleClick}
									className="px-3 py-2 font-poppins font-medium bg-rose-600 hover:bg-rose-500 text-gray-50 rounded-xl flex items-center gap-2"
								>
									<LogoutIcon />
									Logout
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</nav>

	);
}

export default NavBar;