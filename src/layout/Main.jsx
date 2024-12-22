import React, { useState } from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import Header from './Header';

const Main = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <Content isOpen={isOpen}/>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
            <Header/>
        </div>
    );
}

export default Main;
