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
      <div className="w-full h-full bg-gradient-to-r from-purple-400 to-primary flex">
        <WebSidebar
          sidebarVisible={sidebarVisible}
          setsidebarVisible={setsidebarVisible}
        />
        <div className={`${sidebarVisible ? "w-3/4" : "w-full"} ease-in-out duration-100 transition-all` }>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/prescriptions" element={<AllPrescriptions />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/add-prescription" element={<AddPrescription />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
