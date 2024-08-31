import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Icon from "../assets/icon.jpg";
import { Link } from "react-router-dom";

const Prescription = () => {

  const { name } = useParams()
  const [prescription, setPrescription] = useState({
    prescriptionName: 'Prescription 1',
    medicationName: 'Paracetamol',
    medicationDetails: '40mg',
    administrationInstructions: '2 capsules per dose',
    additionalDetails: 'take after lunch'
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

      <div className="bg-white/80 rounded-3xl shadow-lg p-6 mt-4">
      <div className="text-3xl text-[#c0c0c0] font-bold mb-2">Every 12 hours</div>
      <div className='flex justify-between'>
        
      <h2 className='text-5xl font-bold mb-2'>{prescription?.medicationName}</h2>
        <button className='bg-primary hover:bg-purple-500 text-white font-bold py-1 px-4 rounded-3xl mt-4'>
          Edit 
        </button>
      </div>

      <p className='text-xl font-bold mb-2'>{prescription?.medicationDetails}, {prescription?.administrationInstructions}</p>

      <div className="p-2 w-full bg-indigo-400 rounded-2xl my-2.5">
        <div
            style={{ width: 1000 }}
            className="h-2 bg-white/90 rounded-2xl"
        ></div>
      </div>

      <h2 className="text-lg text-[#c0c0c0] font-bold mb-2">26/55 Doses taken</h2>
      <p className='text-gray-800'>{prescription?.additionalDetails}</p>


      </div>
    </div>
    
  );
};

export default Prescription