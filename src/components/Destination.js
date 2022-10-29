import React from 'react'
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"
import Mountain5 from "../assets/5.jpg"
import DestinationData from './DestinationData'
import "./DestinationStyles.css"

const Destination = () => {
    return (
        <div className='destination'>
            <h1>
                Popular Destinations
            </h1>
            <p> Tours give you the opportunity to see a lot, within a time frame </p>

            <DestinationData
                className1='first-des'
                className2='des-text'
                heading="Tall Volcano, Batangas"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, erat eget eleifend lobortis, ipsum metus volutpat nunc, quis ultrices nisi odio hendrerit risus. Ut ut mauris in massa sodales dictum a sed lorem. Fusce varius faucibus massa nec facilisis. Morbi accumsan urna nec mi tempus auctor. Vivamus quis ligula leo. Aliquam molestie efficitur nulla quis facilisis. Mauris accumsan tortor sit amet est aliquet, vel posuere metus accumsan. Nullam varius interdum neque, iaculis condimentum ligula efficitur tempus. Aliquam vehicula tortor efficitur condimentum aliquam. Integer nunc erat, fermentum sed dapibus sit amet, porttitor eget metus. Duis blandit fermentum enim nec mollis."
                img1={Mountain1}
                img2={Mountain2}

            />

            <DestinationData
                className1='first-des-reverse'
                className2='des-text'
                heading="Tall Volcano, Batangas"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, erat eget eleifend lobortis, ipsum metus volutpat nunc, quis ultrices nisi odio hendrerit risus. Ut ut mauris in massa sodales dictum a sed lorem. Fusce varius faucibus massa nec facilisis. Morbi accumsan urna nec mi tempus auctor. Vivamus quis ligula leo. Aliquam molestie efficitur nulla quis facilisis. Mauris accumsan tortor sit amet est aliquet, vel posuere metus accumsan. Nullam varius interdum neque, iaculis condimentum ligula efficitur tempus. Aliquam vehicula tortor efficitur condimentum aliquam. Integer nunc erat, fermentum sed dapibus sit amet, porttitor eget metus. Duis blandit fermentum enim nec mollis."
                img1={Mountain3}
                img2={Mountain4}

            />


        </div>
    )
}

export default Destination