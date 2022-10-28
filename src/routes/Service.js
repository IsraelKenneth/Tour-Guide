import React from 'react'
import AboutImg from "../assets/night.jpg"
import Hero from '../components/Hero'
import Trip from '../components/Trip'

const Service = () => {
    return (
        <div>
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="Service"
                url="/about"
            />
            <Trip />
        </div>
    )
}

export default Service