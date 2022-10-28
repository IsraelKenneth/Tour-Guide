import React from 'react'
import AboutImg from "../assets/night.jpg"
import AboutUS from '../components/AboutUS'
import Hero from '../components/Hero'

const About = () => {
    return (
        <div>
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="About"
                url="/about"


            />

            <AboutUS />


        </div>
    )
}
export default About