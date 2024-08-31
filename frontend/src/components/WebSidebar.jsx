import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const WebSidebar = ({ sidebarVisible, setsidebarVisible }) => {

  return (
    <div className={`${sidebarVisible ? 'w-1/4' : 'w-1/12'} p-4 flex-col h-screen text-5xl items-center`}>
        <button className='fixed pl-12' onClick={() => setsidebarVisible(!sidebarVisible)}>≡</button>
        <div className={`${sidebarVisible ? 'flex' : 'hidden'} p-8 py-12 h-full flex-col justify-between fixed`}>
            <div className='flex flex-col'>
                <Link to="/" className="p-4 hover:bg-[#d2a0f9] transition-colors duration-300 text-5xl py-2 px-4 rounded-xl">
                    Home
                </Link>
                <Link to="/profile" className="p-4 hover:bg-[#d2a0f9] transition-colors duration-300 text-5xl py-2 px-4 rounded-xl">
                    Profile
                </Link>
                <Link to="/prescriptions" className="p-4 hover:bg-[#d2a0f9] transition-colors duration-300 text-5xl py-2 px-4 rounded-xl">
                    Prescriptions
                </Link>
                <Link to="/calendar" className="p-4 hover:bg-[#d2a0f9] transition-colors duration-300 text-5xl py-2 px-4 rounded-xl">
                    Calendar
                </Link>
            </div>

            
            <Link to="/log-out" className="p-4 hover:bg-gray-700 text-2xl">
                Log Out
            </Link>
        </div>
    </div>
  )
}

export default WebSidebar