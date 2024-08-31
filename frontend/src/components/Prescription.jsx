import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Icon from "../assets/icon.jpg";
import { Link } from "react-router-dom";
import Confetti from 'react-confetti'

const Prescription = () => {

  const { name } = useParams()
  const [dosesTaken, setDosesTaken] = useState(0)
  const [dosesTotal, setDosesTotal] = useState(24)
  const [prescription, setPrescription] = useState({
    prescriptionName: 'Prescription 1',
    medicationName: 'Metformin',
    medicationDetails: '500mg',
    administrationInstructions: '4 tablets per dose',
    additionalDetails: 'Administer with meals.'
  })

  useEffect(() => {
    const getPrescriptionData = async () => {
      const response = await fetch(`/api/prescriptions/${name}`, {
        method: 'GET'
      })

      const prescriptionData = await response.json()
      setPrescription(prescriptionData)
    }

    getPrescriptionData()

  }, [])

  return (
    <div className="p-4 mx-auto">
      {dosesTaken === dosesTotal && <Confetti />}
      <div className="flex items-center">
        <Link to="/">
          <img className="w-16 h-16 mr-2" src={Icon} alt="Icon" />
        </Link>
        <div className="text-3xl text-white font-bold">Prescription Details</div>
      </div>
      <div className="bg-white/80 rounded-3xl shadow-lg p-6 mt-4 h-dvh">
        <div className="text-3xl text-[#c0c0c0] font-bold mb-2">Every 4 hours</div>
        <div className="flex justify-between">
          <h2 className="text-5xl font-bold mb-2">{prescription?.medicationName}</h2>
          <div className='w-52 flex justify-between'>
            <button className='text-5xl' onClick={() => { if (dosesTaken < dosesTotal) { setDosesTaken(dosesTaken + 1) } }}>
              +
            </button>
            <button className='text-5xl' onClick={() => { if (dosesTaken <= dosesTotal && dosesTaken > 0) { setDosesTaken(dosesTaken - 1) } }}>
              -
            </button>
            <button className="bg-indigo-400 text-white font-semibold py-1 px-4 rounded-3xl mt-4 text-lg">
              Edit
            </button>
          </div>
        </div>

        <p className="text-xl font-bold mb-2">
          {prescription?.medicationDetails}, {prescription?.administrationInstructions}
        </p>

        <div className="p-2 w-full bg-indigo-400 rounded-2xl my-2.5">
          <div
            style={{ width: `${(dosesTaken / dosesTotal) * 100}%` }}
            className="h-2 bg-white/90 rounded-2xl"
          ></div>
        </div>
        <h2 className="text-lg text-[#c0c0c0] font-bold mb-2">{dosesTaken}/{dosesTotal} Doses taken</h2>
        <p className="text-gray-800">{prescription?.additionalDetails}</p>
      </div>
    </div>

  );
};

export default Prescription