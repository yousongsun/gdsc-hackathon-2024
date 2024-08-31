import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../index.css'
import { Link } from 'react-router-dom'


import Icon from '../assets/icon.jpg'

const Calendar = () => {
  return (
    <div className='container p-4 mx-auto'>
      <div className='flex flex-col'>
        <div className='text-3xl flex max-h-full text-white font-bold items-center'>
          <Link to="/"><img className='w-16 h-16' src={Icon} alt="Icon" /></Link>
          <h1 className='text-3xl'>Calendar</h1>
        </div>
        <div className='pt-10 text-xl max-w-max text-white font-bold border-none'>
          <FullCalendar
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,dayGridWeek,dayGridDay'
            }}
            height='auto'
            width='auto'
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            color='black'
          />
        </div>
      </div>
    </div>
  )
}

export default Calendar