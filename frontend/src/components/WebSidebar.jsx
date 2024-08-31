import React, { useState } from 'react'

const WebSidebar = ({ sidebarVisible }) => {

    
  return (
      <div className={sidebarVisible ? 'flex' : ' hidden'}>
        HJello
      </div>
  )
}

export default WebSidebar