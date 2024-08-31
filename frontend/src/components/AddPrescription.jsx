import React from "react";

import Icon from "../assets/icon.jpg";

const AddPrescription = () => {
  return (
    <>
      <div className="container p-4 mx-auto">
        <div className="flex items-center">
          <img className="w-16 h-16" src={Icon} alt="Icon" />
          <div className="text-3xl text-white font-bold">New Prescription</div>
        </div>

        <div className="bg-white/80 rounded-3xl shadow-lg p-6 mt-4">
          <h2 className="text-lg text-[#c0c0c0] font-bold mb-2">
            Create a new prescription
          </h2>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold mb-2">Prescription Name</h2>
            <button className="bg-indigo-400 hover:bg-indigo-400 text-white font-bold py-1 px-4 rounded-3xl mt-4 ">
              Save changes
            </button>
          </div>
        </div>

        <div className="bg-white/80 rounded-3xl shadow-lg p-6 mt-4">
          <h2 className="text-lg text-[#c0c0c0] font-bold mb-2">
            Prescription details
          </h2>

          <div className="flex flex-col">
            <div>
              <h2 className="text-xl font-bold mb-2">Medication name</h2>
              <p className="text-gray-800">
                Placeholder text Placeholder text Placeholder text Placeholder
                text
              </p>
            </div>

            <hr className="my-4" />

            <div>
              <h2 className="text-xl font-bold mb-2">
                Medication details (dosage / form / quantity)
              </h2>
              <p className="text-gray-800">
                Placeholder text Placeholder text Placeholder text Placeholder
                text
              </p>
            </div>

            <hr className="my-4" />

            <div>
              <h2 className="text-xl font-bold mb-2">
                Administration instructions
              </h2>
              <p className="text-gray-800">
                Placeholder text Placeholder text Placeholder text Placeholder
                text
              </p>
            </div>

            <hr className="my-4" />

            <div>
              <h2 className="text-xl font-bold mb-2">Additional details</h2>
              <p className="text-gray-800">
                Placeholder text Placeholder text Placeholder text Placeholder
                text
              </p>
            </div>

            <hr className="my-4" />

            <div>
              <h2 className="text-xl font-bold mb-2">Last Taken Time</h2>
              <p className="text-gray-800">
                Placeholder text Placeholder text Placeholder text Placeholder
                text
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPrescription;
