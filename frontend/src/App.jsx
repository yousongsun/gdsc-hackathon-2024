import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Calendar from "./components/Calendar";
import AllPrescriptions from "./components/AllPrescriptions";
import AddPrescription from "./components/AddPrescription";
import "./App.css";
import WebSidebar from "./components/WebSidebar";
import Profile from "./components/Profile";

const App = () => {
  const [sidebarVisible, setsidebarVisible] = useState(false);

  return (
    <BrowserRouter>

      <div className="w-full h-full animate-gradient-x bg-gradient-to-r from-[#94b9ff] via-violet-400 to-[#67c5d3] flex">
        <WebSidebar
          sidebarVisible={sidebarVisible}
          setsidebarVisible={setsidebarVisible}
        />
        <div className={`${sidebarVisible ? "w-4/5" : "w-full"} ease-in-out duration-100 transition-all`}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/prescriptions" element={<AllPrescriptions />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/add-prescription" element={<AddPrescription />} />
          </Routes>
        </div>
      </div>
      <script src="./test.js"></script>
    </BrowserRouter>
  );
};

export default App;
<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>