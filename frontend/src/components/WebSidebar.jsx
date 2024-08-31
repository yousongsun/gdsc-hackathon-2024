import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const WebSidebar = ({ sidebarVisible, setsidebarVisible, setIsLoggedIn }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false)
        navigate('/login')
    }

    return (
        <div className={`${sidebarVisible ? 'w-1/5' : 'w-1/12'} ease-in-out duration-100 transition-all p-4 flex-col h-screen text-5xl items-center`}>
            <button className='fixed pl-12 z-20 text-white' onClick={() => setsidebarVisible(!sidebarVisible)}>≡</button>
            <div className={`${sidebarVisible ? 'flex' : 'hidden'} p-8 pt-24 pb-12 h-full flex-col justify-between fixed`}>
                <div className='flex flex-col'>
                    <Link to="/" className="font-bold p-4 py-8 text-white hover:bg-indigo-400 transition-colors duration-300 text-5xl px-4 rounded-3xl">
                        Home
                    </Link>
                    <Link to="/profile" className="font-bold p-4 py-8 text-white hover:bg-indigo-400 transition-colors duration-300 text-5xl px-4 rounded-3xl">
                        Profile
                    </Link>
                    <Link to="/prescriptions" className="font-bold p-4 py-8 text-white hover:bg-indigo-400 transition-colors duration-300 text-5xl px-4 rounded-3xl">
                        Prescriptions
                    </Link>
                    <Link to="/calendar" className="font-bold p-4 py-8 text-white hover:bg-indigo-400 transition-colors duration-300 text-5xl px-4 rounded-3xl">
                        Calendar
                    </Link>
                </div>


                <Link to="/logout" onClick= {handleLogout} className="p-4 py-8 text-white hover:bg-indigo-400 transition-colors text-2xl px-4 font-bold rounded-3xl">
                    Log Out
                </Link>
            </div>
        </div>
    )
}

export default WebSidebar