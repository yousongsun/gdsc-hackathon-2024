import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const WebSidebar = ({ sidebarVisible, setsidebarVisible }) => {

  return (
    <div className={`${sidebarVisible ? 'w-1/4' : 'w-1/12'} flex-col h-screen text-5xl`}>
        <button onClick={() => setsidebarVisible(!sidebarVisible)}>≡</button>
        <div className={`${sidebarVisible ? 'flex' : 'hidden'} p-8 py-12 flex-col h-screen justify-between`}>
            <div className='flex flex-col'>
                <Link to="/" className="p-4 hover:bg-gray-700 text-5xl">
                    Home
                </Link>
                <Link to="/profile" className="p-4 hover:bg-gray-700 text-5xl">
                    Profile
                </Link>
                <Link to="/prescriptions" className="p-4 hover:bg-gray-700 text-5xl">
                    Prescriptions
                </Link>
                <Link to="/calendar" className="p-4 hover:bg-gray-700 text-5xl">
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