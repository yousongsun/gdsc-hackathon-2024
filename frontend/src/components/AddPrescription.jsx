import React, { useState } from "react";
import { PRECRIPTION_URL } from "../api/urls";
import Icon from "../assets/icon.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const AddPrescription = () => {
  const [prescriptionName, setPrescriptionName] = useState("");
  const [medicationName, setMedicationName] = useState("");
  const [medicationDetails, setMedicationDetails] = useState("");
  const [administrationInstructions, setAdminInstruc] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [lastTakenTime, setLastTakenTime] = useState("");

  const clearForm = () => {
    setPrescriptionName("");
    setMedicationDetails("");
    setMedicationName("");
    setAdminInstruc("");
    setAdditionalDetails("");
    setLastTakenTime("");
  };

  const handleAddPrsp = async () => {
    await axios
      .post(PRECRIPTION_URL, {
        prescriptionName: prescriptionName,
        medicationName: medicationName,
        medicationDetails: medicationDetails,
        administrationInstructions: administrationInstructions,
        additionalDetails: additionalDetails,
        lastTakenTime: lastTakenTime,
      })
      .then(() => {
        clearForm();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="container p-4 mx-auto">
        <div className="flex items-center">
          <Link to="/">
            <img className="w-16 h-16 mr-2" src={Icon} alt="Icon" />
          </Link>
          <div className="text-3xl text-white font-bold">New Prescription</div>
        </div>

        <div className="bg-white/80 rounded-3xl shadow-lg p-6 mt-4">
          <h2 className="text-2xl font-bold mb-2 ml-1">
            Create a new prescription
          </h2>
          <div className="flex justify-between">
            <input className="rounded-3xl p-2 pr-10"
              placeholder=" Enter Prescription Name"
              type="text"
              value={prescriptionName}
              onChange={(e) => setPrescriptionName(e.target.value)}
            />
            <button
              onClick={handleAddPrsp}
              className="bg-indigo-400 hover:bg-indigo-400 text-white font-bold py-1 px-4 rounded-3xl mt-4 "
            >
              Save changes
            </button>
          </div>
        </div>

        <div className="bg-white/80 rounded-3xl shadow-lg p-6 mt-4">
          <h2 className="text-xl text-[#c0c0c0] font-bold mb-2">
            Prescription details
          </h2>

          <div className="flex flex-col">
            <div>
              <h2 className="text-2xl font-bold mb-2">Medication name</h2>
              <input className="rounded-3xl p-2 pr-10"
                placeholder=" Enter medication name"
                type="text"
                value={medicationName}
                onChange={(e) => setMedicationName(e.target.value)}
              />
            </div>

            <hr className="my-4" />

            <div>
              <h2 className="text-2xl font-bold mb-2">
                Medication details (dosage / form / quantity)
              </h2>
              <input className="rounded-3xl p-2 pr-10"
                placeholder="Enter medication details"
                type="text"
                value={medicationDetails}
                onChange={(e) => setMedicationDetails(e.target.value)}
              />
            </div>

            <hr className="my-4" />

            <div>
              <h2 className="text-2xl font-bold mb-2 ">
                Administration instructions
              </h2>
              <input className="rounded-3xl p-2 pr-10"
                placeholder=" Enter administration instructions"
                type="text"
                value={administrationInstructions}
                onChange={(e) => setAdminInstruc(e.target.value)}
              />
            </div>

            <hr className="my-4" />

            <div>
              <h2 className="text-2xl font-bold mb-2">Additional details</h2>
              <input className="rounded-3xl p-2 pr-10"
                placeholder="Additional details"
                type="text"
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
              />
            </div>

            <hr className="my-4" />

            <div>
              <h2 className="text-2xl font-bold mb-2">Last Taken Time</h2>
              <input className="rounded-3xl p-2 pr-10"
                placeholder="Last time taken"
                type="text"
                value={lastTakenTime}
                onChange={(e) => setLastTakenTime(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPrescription;
