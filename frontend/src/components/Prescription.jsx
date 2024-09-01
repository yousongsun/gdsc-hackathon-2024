import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Icon from "../assets/icon.jpg";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import medImage from "../assets/metformin.jpg"; // Adjust the path as needed

const Prescription = () => {
  const { name } = useParams();
  const [dosesTaken, setDosesTaken] = useState(22);
  const [dosesTotal, setDosesTotal] = useState(55);
  const [prescription, setPrescription] = useState({
    prescriptionName: "Prescription 1",
    medicationName: "Metformin",
    medicationDetails: "500mg",
    administrationInstructions: "4 tablets per dose",
    additionalDetails: "Administer with meals.",
  });

  useEffect(() => {
    const getPrescriptionData = async () => {
      const response = await fetch(`/api/prescriptions/${name}`, {
        method: "GET",
      });

      const prescriptionData = await response.json();
      setPrescription(prescriptionData);
    };

    getPrescriptionData();
  }, []);

  return (
    <div className="p-4 mx-auto px-6">
      {dosesTaken === dosesTotal && <Confetti width={1800}/>}
      <div className="flex items-center">
        <Link to="/">
          <img className="w-16 h-16 mr-2" src={Icon} alt="Icon" />
        </Link>
        <div className="text-3xl text-white font-bold">
          Prescription Details
        </div>
      </div>
      <div className="bg-white/80 rounded-3xl shadow-lg p-6 mt-4 h-dvh">
        <div className="text-3xl text-[#666666] font-bold mb-2">
          Every 4 hours
        </div>
        <div className="flex justify-between">
          <h2 className="text-5xl font-bold mb-2">{prescription?.medicationName}</h2>
          <div className='w-52 flex justify-between'>
            <button className='bg-[#808080] text-white font-bold w-10 rounded-full mt-4 text-2xl p-0' onClick={() => { if (dosesTaken < dosesTotal) { setDosesTaken(dosesTaken + 1) } }}>
              +
            </button>
            <button
              className="bg-[#808080] text-white font-bold w-10 rounded-full mt-4 text-2xl"
              onClick={() => {
                if (dosesTaken <= dosesTotal && dosesTaken > 0) {
                  setDosesTaken(dosesTaken - 1);
                }
              }}
            >
              -
            </button>
            <button className="bg-indigo-400 text-white font-semibold py-1 px-4 rounded-3xl mt-4 text-lg">
              Edit
            </button>
          </div>
        </div>

        <p className="text-xl font-bold mb-2">
          {prescription?.medicationDetails},{" "}
          {prescription?.administrationInstructions}
        </p>

        <div className="p-2 w-full bg-indigo-400 rounded-2xl my-2.5">
          <div
            style={{ width: `${(dosesTaken / dosesTotal) * 100}%` }}
            className="h-2 bg-white/90 rounded-2xl transition-all ease-out duration-500"
          ></div>
        </div>
        <h2 className="text-lg text-[#c0c0c0] font-bold mb-2">
          {dosesTaken}/{dosesTotal} Doses taken
        </h2>
        <div className="flex">
          <div className="text-gray-800 leading-8 mt-5 text-xl">
            <h1 className="font-bold text-3xl">Administration Instructions</h1>
            Administer with meals to reduce gastrointestinal side effects. Do
            not crush, chew, or break extended-release tablets. Take the
            medication at the same time each day to maintain even levels of the
            drug in your bloodstream. If a dose is missed, take it as soon as
            remembered unless it is almost time for the next dose. Do not double
            up on doses to make up for a missed one.
            <br></br>
            <br></br>
            <h1 className="font-bold text-3xl">Common Side Effects</h1>
            Gastrointestinal issues such as nausea, vomiting, diarrhea,
            abdominal discomfort, and loss of appetite. These often diminish as
            the body adjusts to the medication.
            <br></br>
            <br></br>
            <h1 className="font-bold text-3xl">Additional Details</h1>
            Metformin can interact with various medications such as diuretics,
            corticosteroids, and blood pressure medications. It's important to
            inform healthcare providers of all medications and supplements being
            taken. Regular monitoring of blood glucose levels is essential to
            assess the effectiveness of Metformin and make any necessary
            adjustments to dosage.
          </div>
          <img
            src={medImage}
            className="w-1/3 h-1/4 border-indigo-400 border-[10px] border-solid rounded-xl ml-4"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
