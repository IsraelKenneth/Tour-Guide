import React from 'react'
import TripData from './TripData'
import "./TripStyles.css"
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/6.jpg"
import Trip3 from "../assets/8.jpg"

const Trip = () => {
    return (
        <div className='trip'>
            <h1>
                Recent Trips
            </h1>
            <p> You can discover unique destinations using Google Maps.</p>
            <div className='tripcard'>
                <TripData
                    img1={Trip1}
                    heading="Trip in Indonesia"
                    text="Nulla iaculis mattis dolor sit amet congue. Donec justo neque, dictum sit amet turpis quis, accumsan semper nisl. Fusce porttitor massa scelerisque justo posuere, vitae mollis sapien volutpat. Maecenas consectetur luctus posuere. Vivamus interdum id enim eget pharetra."
                />

                <TripData
                    img1={Trip2}
                    heading="Trip in Indonesia"
                    text="Nulla iaculis mattis dolor sit amet congue. Donec justo neque, dictum sit amet turpis quis, accumsan semper nisl. Fusce porttitor massa scelerisque justo posuere, vitae mollis sapien volutpat. Maecenas consectetur luctus posuere. Vivamus interdum id enim eget pharetra."
                />
                <TripData
                    img1={Trip3}
                    heading="Trip in Indonesia"
                    text="Nulla iaculis mattis dolor sit amet congue. Donec justo neque, dictum sit amet turpis quis, accumsan semper nisl. Fusce porttitor massa scelerisque justo posuere, vitae mollis sapien volutpat. Maecenas consectetur luctus posuere. Vivamus interdum id enim eget pharetra."
                />
            </div>
        </div>
    )
}

export default Trip