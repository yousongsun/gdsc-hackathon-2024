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

      <div className="bg-white my-4 rounded-xl h-64">prescription1</div>
      <div className="bg-white my-4 rounded-xl h-64">prescription1</div>
    </div>
  );
};

export default Homepage;
