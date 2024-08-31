import React from 'react'
import { Link } from 'react-router-dom'

const PrescriptionBanner = ({ name, dose, hours }) => {
  return (
    <Link to={`/prescriptions/${name}`}>
      <div className="bg-white/60 rounded-3xl shadow-lg p-6 mt-4">
        <h2 className="text-lg text-[#666666] font-bold mb-2">
          Every {hours} Hours
        </h2>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
        </div>
        <h2 className="text-xl font-semibold mb-2">{dose}</h2>
      </div>
    </Link >
  )
}

export default PrescriptionBanner;
