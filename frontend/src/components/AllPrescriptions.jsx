import React from 'react'
import Prescription from './Prescription'
import PrescriptionBanner from './PrescriptionBanner'

const AllPrescriptions = () => {
  return (
    <div className = 'flex flex-row flex-wrap'>
      <h1 className='text-5xl font-bold text-gray-300'>Prescriptions</h1>
      <PrescriptionBanner name={'Paracetamol'} dose={'500mg'} />
      <PrescriptionBanner name={'Ibuprofen'} dose={'200mg'} />
      <PrescriptionBanner name={'Aspirin'} dose={'100mg'} />
      <PrescriptionBanner name={'Amoxicillin'} dose={'500mg'} />
      <PrescriptionBanner name={'Azithromycin'} dose={'500mg'} />
      <PrescriptionBanner name={'Ciprofloxacin'} dose={'500mg'} />
      <PrescriptionBanner name={'Doxycycline'} dose={'100mg'} />
      <PrescriptionBanner name={'Metronidazole'} dose={'500mg'} />
    </div>
  )
}

export default AllPrescriptions