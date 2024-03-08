import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Carouser from '../components/Carousel/Carouser';

const Home = () => {
    return (  
    <>
    <div id="section-home">
    <NavBar/>
    <Hero/>
    </div>
    <Carouser/>
    <Footer/>
    </>

    ); 
}

export default Home;