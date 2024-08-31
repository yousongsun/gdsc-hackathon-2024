<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
=======
import React from "react";
>>>>>>> 2c9b3737740907a355ddc3c41731cd0b859b6a1a

const PrescriptionBanner = ({ name, dose, details }) => {
  return (
<<<<<<< HEAD
    <Link>
      <button className='bg-white/80 rounded-3xl shadow-lg p-6 mt-4'>
        <h2 className='text-lg text-[#c0c0c0] font-bold mb-2'>Every 12 Hours</h2>
        <div className='flex justify-between'>
          <h2 className='text-3xl font-bold mb-2'>{name}</h2>
        </div>
        <h2 className='text-xl font-bold mb-2'>{dose}</h2>
        <p className='text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim justo sit amet diam. Vivamus at dui a mi lobortis pretium sit amet at libero. Vestibulum pharetra, lectus eu blandit rhoncus, dolor ante varius lacus, et elementum tortor urna.</p>
        </button></Link>
  )
}
=======
    <>
      <div className="bg-white/80 rounded-3xl shadow-lg p-6 mt-4">
        <h2 className="text-lg text-[#c0c0c0] font-bold mb-2">
          Every 12 Hours
        </h2>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
          <button className="bg-indigo-400 hover:bg-indigo-400 text-white font-bold py-1 px-4 rounded-3xl mt-4 ">
            Edit
          </button>
        </div>
        <h2 className="text-xl font-bold mb-2">{dose}</h2>
        <p className="text-gray-800">{details}</p>
      </div>
    </>
  );
};
>>>>>>> 2c9b3737740907a355ddc3c41731cd0b859b6a1a

export default PrescriptionBanner;
