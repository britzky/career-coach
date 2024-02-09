import React from 'react';
import { Link } from 'react-router-dom';

interface NavBarProps {
    text: string;
}

export const NavBar: React.FC<NavBarProps> = ({ text }) => {
    return (
        <nav className='fixed p-5 top-0'>
            <div className='navbar-text'>
                <Link to='/' className='text-purpleText text-base font-bold'>{text}</Link>
            </div>
        </nav>
    )
}