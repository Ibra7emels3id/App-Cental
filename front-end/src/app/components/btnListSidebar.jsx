'use client'
import React, { useState } from 'react';
import SideBar from './SideBar';

const BtnListSidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    
    // Handle Show Sidebar
    const handleToggle = () => {
        setShowSidebar(!showSidebar);
    }


    return (
        <>
            <button onClick={handleToggle} type='button' id="toggleOpen" className=' p-1.5 border rounded-lg'>
                <svg
                    className="w-7 h-7 fill-gray-800"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <SideBar handleToggle={handleToggle} showSidebar={showSidebar}  />
        </>
    );
}

export default BtnListSidebar;
