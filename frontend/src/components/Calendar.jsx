import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../index.css'
import { Link } from 'react-router-dom'


import Icon from '../assets/icon.jpg'

const Calendar = () => {

  const [events, setEvents] = useState([
    { title: 'Metformin', start: '2024-09-04', color: '#FF6961' },
    { title: 'Metformin', start: '2024-09-05', color: '#FF6961' },
    { title: 'Metformin', start: '2024-09-06', color: '#FF6961' },
    { title: 'Metformin', start: '2024-09-07', color: '#FF6961' },
    { title: 'Metformin', start: '2024-09-08', color: '#FF6961' },
    { title: 'Metformin', start: '2024-09-09', color: '#FF6961' },
    { title: 'Metformin', start: '2024-09-10', color: '#FF6961' },
    { title: 'Metformin', start: '2024-09-11', color: '#FF6961' },
    { title: 'Metformin', start: '2024-09-12', color: '#FF6961' },
    { title: 'Metformin', start: '2024-09-13', color: '#FF6961' },
    { title: 'Metformin', start: '2024-09-14', color: '#FF6961' },
    { title: 'Metformin', start: '2024-09-15', color: '#FF6961' },
    { title: 'Metformin', start: '2024-09-16', color: '#FF6961' },
    { title: 'Metformin', start: '2024-09-17', color: '#FF6961' },
    { title: 'Metformin', start: '2024-09-18', color: '#FF6961' },
    { title: 'Losartan', start: '2024-09-04', color: '#77DD77' },
    { title: 'Losartan', start: '2024-09-11', color: '#77DD77' },
    { title: 'Losartan', start: '2024-09-18', color: '#77DD77' },
    { title: 'Losartan', start: '2024-09-25', color: '#77DD77' },
    { title: 'Atorvastatin', start: '2024-09-09', color: '#7A9AC0' },
    { title: 'Atorvastatin', start: '2024-09-30', color: '#7A9AC0' },
    { title: `Doctor's Appointment`, start: '2024-09-26', color: '#FFB347' },

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