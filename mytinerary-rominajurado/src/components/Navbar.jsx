import iconoUser from "../assets/img/user-icon.png";


const NavBar = () => {
    return ( 
    <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
	<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		<div className="md:order-1">
			<img src="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000678_airplane-01.png" alt="logo-travel" className="w-12 h-12" />
		</div>
		<div className="text-gray-500 order-3 w-full md:w-auto md:order-2 ">
			<ul className="flex justify-between">
				<li className="md:px-4 md:py-2 font-bold text-teal-600 text-xl"><a href="#">Home</a></li>
				<li className="md:px-4 md:py-2  hover:text-teal-500 text-xl "><a href="">Cities</a></li>
			</ul>
		</div>
		<div className="order-2 md:order-3 flex items-center">
            <div className="mr-4 p-1 rounded-full border border-gray-500">
                <img src={iconoUser} alt="icono-user" className="w-9 h-9" />
            </div>
			<button className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-gray-50 rounded-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Login</span>
            </button>
		</div>
	</div>
</nav>
);
}

export default NavBar;