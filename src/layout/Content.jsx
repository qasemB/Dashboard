import React, { useState } from 'react';
import img from '../img/bg-5.webp'; // Default image

const Content = ({isOpen}) => {
    const [currentBg, setCurrentBg] = useState(0);

    const images = [
        img,
        require('../img/bg-1.jpg'), // Use require for dynamic paths
        require('../img/bg-2.jpg'),
        require('../img/bg-3.jpg'),
        require('../img/bg-4.avif'),
        require('../img/bg-6.jpeg'),
        require('../img/bg-7.jpg'),
    ];

    return (
        <div
            className={`overflow-y-auto w-full h-screen pt-16  ${isOpen? "pl-60" : "pl-20"} top-0 transition-all duration-500`}
            style={{
                backgroundImage: `url(${images[currentBg]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Buttons to change the background */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
                {images.map((_, index) => (
                    <button
                    
                        key={index}
                        onClick={() => setCurrentBg(index)}
                        className={`px-4 py-2 text-white rounded 
                            ${currentBg === index ? 'bg-blue-600' : 'bg-blue-300 hover:bg-blue-600'}`
                        }
                    >
                        Background {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Content;
