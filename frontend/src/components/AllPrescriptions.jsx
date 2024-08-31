import React from 'react'
import Prescription from './Prescription'
import PrescriptionBanner from './PrescriptionBanner'
import Icon from '../assets/icon.jpg'

const AllPrescriptions = () => {
  return (
    <div className='container p-4 mx-auto'>
      <div className='flex flex-row flex-wrap'>
        <div className='flex items-center'>
          <img className='w-16 h-16' src={Icon} alt="Icon" />
          <h1 className='text-3xl text-white font-bold'>Prescriptions</h1>
        </div>
        <PrescriptionBanner name={'Paracetamol'} dose={'500mg'} />
        <PrescriptionBanner name={'Ibuprofen'} dose={'200mg'} />
        <PrescriptionBanner name={'Aspirin'} dose={'100mg'} />
        <PrescriptionBanner name={'Amoxicillin'} dose={'500mg'} />
        <PrescriptionBanner name={'Azithromycin'} dose={'500mg'} />
        <PrescriptionBanner name={'Ciprofloxacin'} dose={'500mg'} />
        <PrescriptionBanner name={'Doxycycline'} dose={'100mg'} />
        <PrescriptionBanner name={'Metronidazole'} dose={'500mg'} />
      </div>
    </div>
  )
}

export default AllPrescriptions