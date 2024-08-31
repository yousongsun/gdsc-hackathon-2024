import React from 'react'
import { Link } from 'react-router-dom'

const PrescriptionBanner = ({ name, dose, details }) => {
  return (
    <>
      <div className="bg-white/60 rounded-3xl shadow-lg p-6 mt-4">
        <h2 className="text-lg text-[#666666] font-bold mb-2">
          Every 12 Hours
        </h2>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
        </div>
        <h2 className="text-xl font-bold mb-2">{dose}</h2>
        <p className="text-gray-800">{details}</p>
      </div>
    </>
  );
};

export default PrescriptionBanner;
