import React from "react";
import CatIcon from "../assets/icon.jpg";
import HomePrspItem from "./HomePrspItem";
import { Link } from 'react-router-dom'

const prsps = [
  {
    hours: 3,
    minutes: 25,
    prspName: "abc",
    weight: 50,
    capsules: 2,
    taken: 22,
    total: 55,
    details: "ha",
  },
  {
    hours: 3,
    minutes: 25,
    prspName: "ddddd",
    weight: 50,
    capsules: 2,
    taken: 10,
    total: 100,
    details: "ha",
  },
];

const Homepage = () => {
  const prescriptions = prsps.map((p, index) => (
    <div key={index} className="bg-white/80 my-4 p-6 rounded-3xl h-64">
      <HomePrspItem prspInfo={p} />
    </div>
  ));
  return (
    <div className="container p-4 mx-auto">
      <div className="flex items-center">
        <Link to="/"><img className="w-16 h-16" src={CatIcon} alt="Icon" /></Link>
        <div className="text-3xl text-white font-bold">
          Good Morning, Google Developers
        </div>
      </div>

      {prescriptions}
    </div>
  );
};

export default Homepage;
