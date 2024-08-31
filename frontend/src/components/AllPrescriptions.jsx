import React from "react";
import Prescription from "./Prescription";
import PrescriptionBanner from "./PrescriptionBanner";
import Icon from "../assets/icon.jpg";
import { Link } from "react-router-dom";

const AllPrescriptions = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="flex items-center">
        <img className="w-16 h-16" src={Icon} alt="Icon" />
        <div className="text-3xl text-white font-bold">Your Prescriptions</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-6">
        <div className="bg-white rounded-3xl shadow-lg p-6 mt-4 hover:bg-gray-50">
          <Link to="/add-prescription" className="text-4xl text-gray-800">
            <div className="flex items-center justify-center h-full gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              New Prescription
            </div>
          </Link>
        </div>

        <PrescriptionBanner name={"Paracetamol"} dose={"500mg"} />
        <PrescriptionBanner name={"Ibuprofen"} dose={"200mg"} />
        <PrescriptionBanner name={"Aspirin"} dose={"100mg"} />
        <PrescriptionBanner name={"Amoxicillin"} dose={"500mg"} />
        <PrescriptionBanner name={"Azithromycin"} dose={"500mg"} />
        <PrescriptionBanner name={"Ciprofloxacin"} dose={"500mg"} />
        <PrescriptionBanner name={"Doxycycline"} dose={"100mg"} />
        <PrescriptionBanner name={"Metronidazole"} dose={"500mg"} />
      </div>
    </div>
  );
};

export default AllPrescriptions;
