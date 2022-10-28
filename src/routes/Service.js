import React from 'react'
import AboutImg from "../assets/night.jpg"
import Hero from '../components/Hero'

const Service = () => {
    return (
        <div>
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Service"
                url="/about"
            />
        </div>
    )
}

export default Service