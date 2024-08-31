import React, { useState, useEffect } from "react";
import Prescription from "./Prescription";
import PrescriptionBanner from "./PrescriptionBanner";
import Icon from "../assets/icon.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { PRECRIPTION_URL } from "../api/urls";

const AllPrescriptions = () => {
  // const [allPrsps, setAllPrsps] = useState([]);
  // const getAllPrsps = async () => {
  //   await axios.get(PRECRIPTION_URL).then((res) => {
  //     setAllPrsps(res.data);
  //     console.log(allPrsps);
  //   });
  // };
  // useEffect(() => {
  //   getAllPrsps();
  // }, []);

  // const prspBanners = allPrsps.map((p, index) => (
  //   <PrescriptionBanner
  //     key={index}
  //     name={p.medicationName}
  //     dose={p.medicationDetails}
  //     details={p.additionalDetails}
  //   />
  // ));

  return (
    <div className="container p-4 mx-auto">
      <div className="flex items-center">
        <Link to="/"><img className="w-16 h-16" src={Icon} alt="Icon" /></Link>
        <div className="text-3xl text-white font-bold">My Prescriptions</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-6">
        <div className="bg-white/60 rounded-3xl shadow-lg p-6 mt-4 ">
          <div className="flex items-center justify-center h-full gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#666666"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <Link
              to="/add-prescription"
              className="text-4xl text-[#666666] font-bold"
            >
              New Prescription
            </Link>
          </div>
        </div>
        <PrescriptionBanner name={"Amoxicillin"} dose={"400mg, 2 tablets"} hours={48} />
        <PrescriptionBanner name={"Metformin"} dose={"500mg, 4 tablets"} hours={4} />
        <PrescriptionBanner name={"Nivolumab"} dose={"100mg, 10ml"} hours={24} />
        <PrescriptionBanner name={"Pembrolizumab"} dose={"25mg, 4ml"} hours={12} />
        <PrescriptionBanner name={"Semaglutide"} dose={"3mg, 1 tablet"} hours={12} />
        <PrescriptionBanner name={"Losartan"} dose={"50mg, 3 tablets"} hours={6} />
        {/* {prspBanners} */}
      </div>
    </div>
  );
};

export default AllPrescriptions;
