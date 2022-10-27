import React from 'react'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div>
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination"
                btnText="Travel Plan"
                url="/"
                btnClass="show"


            />
        </div>
    )
}

export default Home