// Navbar.jsx
import React from 'react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#333', color: 'white', padding: '1rem', position: 'fixed', width: '100%', zIndex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <img src={Logo} alt="Logo" style={{ height: '30px', width: 'auto' }} />
            </div>
        </nav>
    );
}

export default Navbar;
