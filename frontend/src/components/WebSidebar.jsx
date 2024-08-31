import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const WebSidebar = ({ sidebarVisible, setsidebarVisible }) => {

  return (
    <div className={`${sidebarVisible ? 'w-1/4' : 'w-1/12'} p-4 flex-col h-screen text-5xl items-center`}>
        <button className='fixed pl-12 z-20' onClick={() => setsidebarVisible(!sidebarVisible)}>≡</button>
        <div className={`${sidebarVisible ? 'flex' : 'hidden'} p-8 pt-24 pb-12 h-full flex-col justify-between fixed`}>
            <div className='flex flex-col'>
                <Link to="/" className="font-bold p-4 py-8 text-white hover:bg-[#d2a0f9] transition-colors duration-300 text-5xl px-4 rounded-3xl">
                    Home
                </Link>
                <Link to="/profile" className="font-bold p-4 py-8 text-white hover:bg-[#d2a0f9] transition-colors duration-300 text-5xl px-4 rounded-3xl">
                    Profile
                </Link>
                <Link to="/prescriptions" className="font-bold p-4 py-8 text-white hover:bg-[#d2a0f9] transition-colors duration-300 text-5xl px-4 rounded-3xl">
                    Prescriptions
                </Link>
                <Link to="/calendar" className="font-bold p-4 py-8 text-white hover:bg-[#d2a0f9] transition-colors duration-300 text-5xl px-4 rounded-3xl">
                    Calendar
                </Link>
            </div>

            
            <Link to="/log-out" className="p-4 py-8 text-white hover:bg-[#d2a0f9] transition-colors duration-300 text-2xl px-4 font-bold rounded-3xl">
                Log Out
            </Link>
        </div>
    </div>
    )
}

export default WebSidebar