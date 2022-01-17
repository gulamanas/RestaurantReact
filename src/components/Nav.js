import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    const [click, setClick] = useState(false);

    const handleBurgerMenu = () => {
        setClick(!click)
    }

    return (
        <nav className='navbar'>
            <div className="navbar_brand">
                <Link to="/">
                    RESTRO <i className="fas fa-utensils"></i>
                </Link>
            </div>
            <div className="burger" onClick={handleBurgerMenu}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className="nav_list">
                <li><Link to='home'>Home</Link></li>
                <li><Link to='menu'>Menu</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='contact'>Contact</Link></li>
            </ul>

        </nav>
    )
}

export default Nav
