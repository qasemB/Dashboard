import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi'; // Import the hamburger menu icon
import { AiOutlineClose, AiOutlineFileText } from 'react-icons/ai'; // Import a close icon for toggling
import { MdRadioButtonUnchecked, MdCropSquare, MdChangeHistory, MdStarOutline, MdVideoLibrary } from 'react-icons/md'; // Other icons
import { FaImage } from 'react-icons/fa'; // Image Upload icon

const Sidebar = ({ isOpen, toggleMenu }) => {


    return (
        <div onClick={toggleMenu}
            className={`overflow-x-hidden fixed top-0 left-0 h-full border-b bg-gradient-to-t from-gray-400 via-gray-200 to-white shadow-xl bg-white transition-all duration-300 
            ${isOpen ? 'w-64' : 'w-20'}`}
        >
            {/* Hamburger Icon */}
            <div className="fixed top-16">
                <div className='fixed top-16 left-2'>
                    <button  className="text-4xl p-2   text-black">
                        {isOpen ? <AiOutlineClose /> : <HiMenu />}
                    </button>
                </div>

                {/* Sidebar Content */}
                <ul className={`mt-16  flex gap-5 flex-col space-y-4 text-black ${isOpen ? 'pl-3' : 'pl-3'}`}>
                    <div className='flex flex-col items-start gap-3 '>
                        <div className='flex flex-nowrap  items-center '>
                            <div
                            onClick={toggleMenu}
                            className='flex justify-center items-center flex-wrap w-10 h-10 rounded-lg bg-white'>
                                <MdRadioButtonUnchecked className='text-blue-500' />
                                <MdCropSquare className='text-blue-500' />
                                <MdChangeHistory className='text-blue-500' />
                                <MdStarOutline className='text-blue-500' />

                            </div>
                            {isOpen ? (<div className='bg-white flex ml-2'>
                                <MdRadioButtonUnchecked className=' text-5xl' />
                                <MdCropSquare className=' text-5xl' />
                                <MdChangeHistory className=' text-5xl' />
                                <MdStarOutline className='text-5xl' />
                            </div>) : ("")}

                        </div>
                        <li className="font-inter text-sm cursor-pointer">Shape</li>
                    </div>

                    <div className='flex flex-col justify-center items-start'>
                        <div className='flex flex-col gap-3 text-center '><div className='flex justify-center items-center flex-wrap w-10 h-10 rounded-lg bg-white'>
                            <AiOutlineFileText className='text-blue-500'/>
                        </div>
                            <li className="font-inter text-sm cursor-pointer">Text</li>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <div className='flex flex-col gap-3 text-center '><div className='flex justify-center items-center flex-wrap w-10 h-10 rounded-lg bg-white'>
                            <FaImage className='text-blue-500'/>
                        </div>
                            <li className="font-inter text-sm cursor-pointer">Image</li>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <div className='flex flex-col gap-3 text-center '><div className='flex justify-center items-center flex-wrap w-10 h-10 rounded-lg bg-white'>
                            <MdVideoLibrary className='text-blue-500'/>
                        </div>
                            <li className="font-inter text-sm cursor-pointer">Video</li>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
