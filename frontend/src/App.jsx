import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Settings from "./components/Settings";
import Prescriptions from "./components/AllPrescriptions";
import AddPrescription from "./components/AddPrescription";
import "./App.css";

const App = () => {

  const [sidebarVisible, setsidebarVisible] = useState(false)

  return (
    
    <div className = 'w-screen h-screen bg-primary'>
      <button className='text-white' onClick={() => setsidebarVisible(!sidebarVisible)}>Toggle Sidebar</button>
      <WebSidebar sidebarVisible={sidebarVisible} />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/prescriptions" element={<Prescriptions />} />
            <Route path="/add-rescription" element={<AddPrescription />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};



export default App;
