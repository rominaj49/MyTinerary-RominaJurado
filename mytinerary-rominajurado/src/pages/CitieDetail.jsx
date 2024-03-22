import { useEffect } from "react";
import CitieCard from "../components/City/detail/CitieCard";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const CitieDetail = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


    return (  
    <>
    <NavBar/>
    <CitieCard/>
    <Footer/>
    </>

    ); 
}

export default CitieDetail;