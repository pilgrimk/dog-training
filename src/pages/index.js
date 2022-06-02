import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import AboutUs from '../components/AboutUsSection'
import Footer from '../components/Footer'
import Events from '../components/EventsSection'

const training_name_value = "Dog Training"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar
                isOpen={isOpen}
                toggle={toggle} />
            <Navbar
                band_name={training_name_value}
                toggle={toggle} />
            <HeroSection />
            <AboutUs />
            <Events  />
            <Footer
                band_name={training_name_value} />
        </>
    )
}

export default Home