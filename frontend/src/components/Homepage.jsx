import React from "react";
import CatIcon from "../assets/icon.jpg";

const Homepage = () => {
  return (
    <div className="h-dvh w-screen flex flex-col items-center">
      <div className="h-12 w-4/5">
        <img className="inline h-full" src={CatIcon} alt="cat" />
        <span>Good Morning, Google Developers </span>
      </div>
      <div className="bg-white my-4 rounded-xl w-4/5 h-64">a</div>
      <div className="bg-white my-4 rounded-xl w-4/5 h-64">b</div>
    </div>
  );
};

export default Homepage;
