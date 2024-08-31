import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Settings from "./components/Settings";
import Prescriptions from "./components/Prescriptions";
import AddPrescription from "./components/AddPrescription";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/add-rescription" element={<AddPrescription />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
