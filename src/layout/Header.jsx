import React from 'react';
import Logo from "../img/8439b51bb7a19f6e65ce1064bc37c197.svg"
const Header = () => {
    return (
        <div className='bg-gradient-to-r from-white via-blue-700 via-green-500 to-purple-500 fixed top-0 left-0 z-100  w-full h-16  bg-white  shadow-md'>
            <div className='fixed left-6 top-4'>
                <img src={Logo} alt='logo'/>
            </div>

        </div>
    );
}

export default Header;
