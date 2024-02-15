import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
    return (
        <nav className='fixed p-5 top-0'>
            <div className='navbar-text'>
                <Link to='/' className='bg-logo gradient-text text-base font-bold'>
                    MyPDP
                </Link>
            </div>
        </nav>
    )
}