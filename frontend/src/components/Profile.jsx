import React from 'react'

import Icon from '../assets/icon.jpg'

const Profile = () => {
  return (
    <>
      <div className='container p-4 mx-auto'>
        <div className='flex items-center'>
          <img className='w-16 h-16' src={Icon} alt="Icon" />
          <div className='text-3xl text-white font-bold'>My Account</div>
        </div>

        <div className='bg-white rounded-3xl shadow-lg p-6 mt-4'>
          <h2 className='text-lg text-gray-300 font-bold mb-2'>Profile</h2>
          <div className='flex justify-between'>
            <h2 className='text-3xl font-bold mb-2'>Google Developer</h2>
            <button className='bg-primary hover:bg-purple-500 text-white font-bold py-1 px-4 rounded-3xl mt-4 '>Edit</button>
          </div>
          <h2 className='text-xl font-bold mb-2'>Auckland, New Zealand</h2>
          <p className='text-gray-800'>Email: googledeveloper@gmail.com</p>
          <p className='text-gray-800'>Gender: Prefer not to say</p>
          <p className='text-gray-800'>Date of Birth: 31/8/2024</p>
        </div>

        <div className='bg-white rounded-3xl shadow-lg p-6 mt-4'>
          <h2 className='text-lg text-gray-300 font-bold mb-2'>Account Settings</h2>

          <div className='flex flex-col'>
            <div>
              <h2 className='text-xl font-bold mb-2'>Change Password</h2>
              <p className='text-gray-800'>Placeholder text Placeholder text Placeholder text Placeholder text</p>
            </div>

            <hr className='my-4' />

            <div>
              <h2 className='text-xl font-bold mb-2'>Notifications</h2>
              <p className='text-gray-800'>Placeholder text Placeholder text Placeholder text Placeholder text</p>
            </div>

            <hr className='my-4' />

            <div>
              <h2 className='text-xl font-bold mb-2'>Additional Settings</h2>
              <p className='text-gray-800'>Placeholder text Placeholder text Placeholder text Placeholder text</p>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default Profile