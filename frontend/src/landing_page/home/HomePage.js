import { OpenAccount } from '../OpenAccount';
import Awards from './Awards';
import Education from './Education';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function HomePage(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
        </>
    );
};