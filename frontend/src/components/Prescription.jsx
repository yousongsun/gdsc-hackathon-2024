import React from 'react'

const Prescription = ({ name, dose, info }) => {
  return (
    <div className='bg-white rounded-3xl shadow-lg p-6 mt-4'>
      <h2 className='text-lg text-white font-bold mb-2'>Prescription</h2>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold mb-2'>{name}</h2>
        <button className='bg-primary hover:bg-purple-500 text-white font-bold py-1 px-4 rounded-3xl mt-4 '>Edit Prescription</button>
      </div>
      <h2 className='text-xl font-bold mb-2'>{dose}</h2>
      <p className='text-gray-800'>{info}</p>
    </div>
  )
}

export default Prescription