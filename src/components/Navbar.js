import React, { useState } from 'react'
import "./NavbarStyles.css"
import { Link } from 'react-router-dom'
import MenuItems from './MenuItems'

const Navbar = () => {


    const [isToggled, setIsToggled] = useState(false);



    const HandleClick = React.useCallback(
        () => setIsToggled(!isToggled)
    );



    const scrollToTop = () => {
        document.getElementById("scroller").scroll(0, 0)
    }




    return (

        <nav className="NavbarItems">
            <h1 className='navbar-logo'>Trippy</h1>
            <div className='menu-icons' onClick={HandleClick}>

                <i className={isToggled === false ? "fas fa-times" : 'fas fa-bars'}></i>
            </div>
            <ul onClick={HandleClick} className={isToggled === false ? "nav-menu active" : "nav-menu"} >
                {MenuItems.map((items, index) => {
                    return (


                        <li key={index}>
                            <Link onClick={scrollToTop} className={items.cName} to={items.url}><i className={items.icon}></i>{items.title}</Link>
                        </li>
                    )
                })}
                <button>Signup</button>
            </ul>
        </nav>
    )
}

export default Navbar
