import React from "react";
import CatIcon from "../assets/icon.jpg";

const Homepage = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="flex items-center">
        <img className="w-16 h-16" src={CatIcon} alt="Icon" />
        <div className="text-3xl text-white font-bold">
          Good Morning, Google Developers
        </div>
      </div>

      <div className="bg-white my-4 p-6 rounded-3xl h-64">
        <div className="text-gray-400 text-xl">In 3 hours, 40 minutes</div>
        <div className="text-4xl">Prescription Name</div>
        <div>40mg, 2 capsules</div>
        <div className="text-gray-400 text-xl">26/55 taken</div>
        <div>details</div>
      </div>
      <div className="bg-white my-4 p-6 rounded-3xl h-64">
        <div className="text-gray-400 text-xl">In 3 hours, 40 minutes</div>
        <div className="text-4xl">Prescription Name</div>
        <div>40mg, 2 capsules</div>
        <div className="text-gray-400 text-xl">26/55 taken</div>
        <div>details</div>
      </div>
    </div>
  );
};

export default Homepage;
