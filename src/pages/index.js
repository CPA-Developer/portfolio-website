import React, {useState} from 'react';
import Contact from '../components/Contact';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Education from '../components/Timeline';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <HeroSection/>
      <InfoSection/>
      <Education/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default Home;
