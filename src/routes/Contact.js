import React from 'react'
import AboutImg from "../assets/2.jpg"
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'

const Contact = () => {
    return (
        <div>
            <Hero cName="hero-mid"
                heroImg={AboutImg}
                title="Contact"
                url="/about"
            />
            <ContactForm />
        </div>
    )
}

export default Contact