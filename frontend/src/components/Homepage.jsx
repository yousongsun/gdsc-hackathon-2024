import React from "react";
import CatIcon from "../assets/icon.jpg";
import HomePrspItem from "./HomePrspItem";
import { Link } from 'react-router-dom';

const first_name = 'Jane';
const last_name = 'Doe';

const prsps = [
  {
    hours: 3,
    minutes: 25,
    prspName: "Vitamins",
    weight: 50,
    capsules: 2,
    taken: 22,
    total: 55,
    details: "ha",
  },
  {
    hours: 3,
    minutes: 25,
    prspName: "Water",
    weight: 50,
    capsules: 2,
    taken: 10,
    total: 100,
    details: "ha",
  },
  {
    hours: 3,
    minutes: 25,
    prspName: "Apples",
    weight: 50,
    capsules: 2,
    taken: 22,
    total: 55,
    details: "ha",
  },
  {
    hours: 3,
    minutes: 25,
    prspName: "Lemon Juice",
    weight: 50,
    capsules: 2,
    taken: 10,
    total: 100,
    details: "ha",
  }, {
    hours: 3,
    minutes: 25,
    prspName: "Chicken Noodles",
    weight: 50,
    capsules: 2,
    taken: 22,
    total: 55,
    details: "ha",
  },
  {
    hours: 3,
    minutes: 25,
    prspName: "Donuts",
    weight: 50,
    capsules: 2,
    taken: 10,
    total: 100,
    details: "ha",
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
