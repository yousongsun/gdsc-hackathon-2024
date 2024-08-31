import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Icon from "../assets/icon.jpg";
import { Link } from "react-router-dom";

const Prescription = () => {

  const { name } = useParams()
  const [prescription, setPrescription] = useState({
    prescriptionName: '',
    medicationName: '',
    medicationDetails: '',
    administrationInstructions: '',
    additionalDetails: ''
  })
  
  useEffect(() => {
    const getPrescriptionData = async () => {
      const response = await fetch(`/api/prescriptions/${name}`, {
        method: 'GET'
      })

      const prescriptionData = await response.json()
      console.log(prescriptionData)
      setPrescription(prescriptionData)
    }

    getPrescriptionData()

  }, [])

  return (
    <div className="container p-4 mx-auto">
        <div className="flex items-center">
        <Link to="/">
          <img className="w-16 h-16" src={Icon} alt="Icon" />
        </Link>
        <div className="text-3xl text-white font-bold">Prescription Details</div>
      </div>
    <div className='bg-white/80 rounded-3xl shadow-lg p-6 mt-4'>
        
      <h2 className='text-lg text-black font-bold mb-2'>Prescription Name</h2>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold mb-2'>{prescription?.prescriptionName}</h2>
        <button className='bg-primary hover:bg-purple-500 text-white font-bold py-1 px-4 rounded-3xl mt-4'>
          Edit Prescription
        </button>
      </div>
      <h3 className='text-2xl font-bold mb-2'>{prescription?.medicationName}</h3>
      <p className='text-lg font-bold mb-2'>{prescription?.medicationDetails}</p>
      <p className='text-gray-800 mb-2'>{prescription?.administrationInstructions}</p>
      <p className='text-gray-800'>{prescription?.additionalDetails}</p>
    </div> 
    </div>
    
  );
};

export default Prescription