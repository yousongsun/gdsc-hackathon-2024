import React from 'react'

import Icon from '../assets/icon.jpg'

const Calendar = () => {
  return (
    <div className='container p-4 mx-auto'>
      <div className='flex items-center'>
        <img className='w-16 h-16' src={Icon} alt="Icon" />
        <div className='text-3xl text-white font-bold'>Calendar</div>
      </div>
    </div>
  )
}

export default Calendar