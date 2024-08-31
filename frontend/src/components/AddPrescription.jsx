import React from 'react'

import Icon from '../assets/icon.jpg'

const AddPrescription = () => {
  return (
    <>
      <div className='container p-4 mx-auto'>
        <div className='flex items-center'>
          <img className='w-16 h-16' src={Icon} alt="Icon" />
          <div className='text-3xl text-white font-bold'>New Prescription</div>
        </div>

        <div className='bg-white rounded-3xl shadow-lg p-6 mt-4'>
          <h2 className='text-lg text-gray-300 font-bold mb-2'>Create a new prescription</h2>
          <div className='flex justify-between'>
            <h2 className='text-3xl font-bold mb-2'>Prescription Name</h2>
          </div>
        </div>

        <div className='bg-white rounded-3xl shadow-lg p-6 mt-4'>
          <h2 className='text-lg text-gray-300 font-bold mb-2'>Prescription details</h2>

          <div className='flex flex-col'>
            <div>
              <h2 className='text-xl font-bold mb-2'>Medication</h2>
              <p className='text-gray-800'>Placeholder text Placeholder text Placeholder text Placeholder text</p>
            </div>

            <hr className='my-4' />

            <div>
              <h2 className='text-xl font-bold mb-2'>Signature (Sig)</h2>
              <p className='text-gray-800'>Placeholder text Placeholder text Placeholder text Placeholder text</p>
            </div>

            <hr className='my-4' />

            <div>
              <h2 className='text-xl font-bold mb-2'>Additional details</h2>
              <p className='text-gray-800'>Placeholder text Placeholder text Placeholder text Placeholder text</p>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default AddPrescription