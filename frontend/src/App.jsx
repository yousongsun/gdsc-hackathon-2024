import React, { useState } from 'react'
import './App.css'
import WebSidebar from './components/WebSidebar'


const App = () => {

  const [sidebarVisible, setsidebarVisible] = useState(false)

  return (
    <div className = 'w-screen h-screen bg-primary'>
        <button className='text-white' onClick={() => setsidebarVisible(!sidebarVisible)}>Toggle Sidebar</button>
        <h1 className='text-white'>Hello World</h1>
      <WebSidebar sidebarVisible={sidebarVisible} />
    </div>
  )
}

export default App