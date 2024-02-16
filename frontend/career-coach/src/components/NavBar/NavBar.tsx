import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.png'

export const NavBar: React.FC = () => {
    return (
    <nav className="absolute">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-10" alt="MyPDP Logo" />
                <span className="self-center text-lg bg-logo gradient-text font-bold whitespace-nowrap">MyPDP</span>
            </Link>
        </div>
    </nav>
    )
}
