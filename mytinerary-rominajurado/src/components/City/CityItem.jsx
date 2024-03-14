import { Link } from "react-router-dom";


const CityItem = ({ city}) => {
    
    return (
        <div className="bg-white w-72 h-96 shadow-md rounded m-3 overflow-hidden transform transition-transform hover:scale-110" data-aos="zoom-in">
          <div className="h-5/6 w-full ">
            <img className="w-full h-full object-cover rounded-t" src={city.image} alt={"imagen de: " + city.name} />
          </div>
          <div className="w-full h-1/5 p-3">
            <Link to={'/cities/' + city._id} className="hover:text-teal-500 text-gray-800">
            <span className="text-lg font-semibold uppercase tracking-wide">{city.name}</span>
            </Link>
          </div>
        </div>    
  );
}
export default CityItem;