import React from "react";
import CatIcon from "../assets/icon.jpg";
import HomePrspItem from "./HomePrspItem";
import { Link } from 'react-router-dom';

const first_name = 'Jane';
const last_name = 'Doe';

const prsps = [
  {
    hours: 2,
    minutes: 25,
    prspName: "Amoxicillin",
    amount: 400,
    dosage: 2,
    taken: 4,
    total: 14,
    form: 'tablets',
    unit: 'mg'
  },
  {
    hours: 2,
    minutes: 25,
    prspName: "Metformin",
    amount: 500,
    dosage: 4,
    taken: 26,
    total: 55,
    form: 'tablets',
    unit: 'mg'
  },
  {
    hours: 3,
    minutes: 5,
    prspName: "Nivolumab",
    amount: 100,
    dosage: 10,
    taken: 4,
    total: 12,
    form: 'ml',
    unit: 'mg'
  },
  {
    hours: 9,
    minutes: 25,
    prspName: "Pembrolizumab",
    amount: 25,
    dosage: 4,
    taken: 10,
    total: 14,
    form: 'ml',
    unit: 'mg'
  },
  {
    hours: 12,
    minutes: 25,
    prspName: "Semaglutide",
    amount: 3,
    dosage: 1,
    taken: 9,
    total: 10,
    form: 'tablet',
    unit: 'mg'
  },
  {
    hours: 12,
    minutes: 25,
    prspName: "Losartan",
    amount: 50,
    dosage: 3,
    taken: 15,
    total: 24,
    form: 'tablets',
    unit: 'mg'
  },
];

const Homepage = () => {
  const prescriptions = prsps.map((p, index) => (
    <div key={index} className="bg-white/60 duration-200 hover:bg-white/90 my-4 p-6 rounded-3xl h-64">
      <HomePrspItem prspInfo={p} />
    </div>
  ));
  return (
    <div className="container p-4 mx-auto">
      <div className="flex items-center">
        <Link to="/"><img className="w-16 h-16" src={CatIcon} alt="Icon" /></Link>
        <div className="text-3xl text-white font-bold">
          Good Morning, {first_name} {last_name}
        </div>
      </div>

      {prescriptions}
    </div>
  );
};

export default Homepage;
