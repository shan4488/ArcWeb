import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import InfoSection from '../components/InfoSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Hierarchy from '../components/Hierarchy';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection { ...homeObjOne } />
        <Projects/>
        <InfoSection { ...homeObjTwo } />
        {/* <InfoSection { ...homeObjThree } /> */}
        <Hierarchy />
        <InfoSection { ...homeObjFour } />
        <Footer />
    </>
  )
}

export default Home