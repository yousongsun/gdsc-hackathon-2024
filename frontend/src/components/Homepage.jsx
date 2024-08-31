import React from "react";
import CatIcon from "../assets/icon.jpg";

const Homepage = () => {
  return (
    <div className="h-dvh mt-8 mx-auto w-1/2 flex flex-col items-center">
      <div className="h-12 w-4/5 text-2xl">
        <img className="inline h-full" src={CatIcon} alt="cat" />
        <span>Good Morning, Google Developers </span>
      </div>
      <div className="bg-white my-4 rounded-xl w-4/5 h-64">prescription1</div>
      <div className="bg-white my-4 rounded-xl w-4/5 h-64">prescription1</div>
    </div>
  );
};

export default Homepage;
