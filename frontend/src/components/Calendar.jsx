import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../index.css'
import { Link } from 'react-router-dom'


import Icon from '../assets/icon.jpg'

const Calendar = () => {

  const [events, setEvents] = useState([
    { title: 'Metformin', start: '2024-09-04', color: 'red' },
    { title: 'Metformin', start: '2024-09-05', color: 'red' },
    { title: 'Metformin', start: '2024-09-06', color: 'red' },
    { title: 'Metformin', start: '2024-09-07', color: 'red' },
    { title: 'Metformin', start: '2024-09-08', color: 'red' },
    { title: 'Metformin', start: '2024-09-09', color: 'red' },
    { title: 'Metformin', start: '2024-09-10', color: 'red' },
    { title: 'Metformin', start: '2024-09-11', color: 'red' },
    { title: 'Metformin', start: '2024-09-12', color: 'red' },
    { title: 'Metformin', start: '2024-09-13', color: 'red' },
    { title: 'Metformin', start: '2024-09-14', color: 'red' },
    { title: 'Metformin', start: '2024-09-15', color: 'red' },
    { title: 'Metformin', start: '2024-09-16', color: 'red' },
    { title: 'Metformin', start: '2024-09-17', color: 'red' },
    { title: 'Metformin', start: '2024-09-18', color: 'red' },
    { title: 'Losartan', start: '2024-09-04', color: 'blue' },
    { title: 'Losartan', start: '2024-09-11', color: 'blue' },
    { title: 'Losartan', start: '2024-09-18', color: 'blue' },
    { title: 'Losartan', start: '2024-09-25', color: 'blue' },
    { title: 'Atorvastatin', start: '2024-09-09', color: 'green' },
    { title: 'Atorvastatin', start: '2024-09-30', color: 'green' },
    { title: `Doctor's Appointment`, start: '2024-09-26', color: 'black' },

  ]);



  return (
    <div className='container p-4 mx-auto'>
      <div className='flex flex-col'>
        <div className='text-3xl flex max-h-full text-white font-bold items-center'>
          <Link to="/"><img className='w-16 h-16 mr-2' src={Icon} alt="Icon" /></Link>
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
            events={events}
          />
        </div>
      </div>
    </div>
  )
}

export default Calendar