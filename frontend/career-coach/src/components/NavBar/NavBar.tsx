import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Logo.png'
import { useCareerDetails } from '../../context/CareerContext';

export const NavBar: React.FC = () => {
    const { resetCareer } = useCareerDetails();
    const navigate = useNavigate();

    const handleLogoClick = () => {
        resetCareer()
        navigate('/')
    }

    return (
    <nav className="absolute">
        <div className="flex flex-wrap justify-between items-center mx-10 max-w-screen-xl p-4">
            <div onClick={handleLogoClick} className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                <img src={logo} className="h-10" alt="MyPDP Logo" />
                <span className="self-center text-lg bg-logo gradient-text font-bold whitespace-nowrap">MyPDP</span>
            </div>
        </div>
    </nav>
    )
}
