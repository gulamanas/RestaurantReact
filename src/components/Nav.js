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
                <Link to="/" className='brand'>
                    RESTRO <i className="fas fa-utensils"></i>
                </Link>
            </div>
            <div className="burger" onClick={handleBurgerMenu}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? "nav_list active" : 'nav_list'}>
                <li><Link to='home' className='list_item'>Home</Link></li>
                <li><Link to='menu' className='list_item'>Menu</Link></li>
                <li><Link to='about' className='list_item'>About</Link></li>
                <li><Link to='contact' className='list_item'>Contact</Link></li>
            </ul>

        </nav>
    )
}

export default Nav
