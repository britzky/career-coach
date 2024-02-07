import React from 'react';
import { Link } from 'react-router-dom';

interface NavBarProps {
    text: string;
}

export const NavBar: React.FC<NavBarProps> = ({ text }) => {
    return (
        <nav className='navbar p-5'>
            <div className='navbar-text'>
                <Link to='/' className='text-purpleText text-base font-bold'>{text}</Link>
            </div>
        </nav>
    )
}