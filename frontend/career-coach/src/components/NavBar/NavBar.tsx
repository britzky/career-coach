import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavBarProps {
    isLandingPage: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ isLandingPage }) => {
    return (
        <nav className='navbar p-5'>
            <div className='navbar-text'>
                <Link to='/' className='text-purpleText text-base font-bold'>
                    {isLandingPage ? "MyPDP" : "WayFinder"}
                </Link>                         
            </div>
        </nav>
    )
}