import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Carouser from '../components/Carousel/Carouser';

const Home = () => {
    return (  
    <div className='bg-gray-200'>
    <div id="section-home" >
    <NavBar/>
    <Hero/>
    </div>
    <Carouser/>
    <Footer/>
    </div>
    ); 
}

export default Home;