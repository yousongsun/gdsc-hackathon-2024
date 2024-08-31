import Icon from "../assets/icon.jpg";
import { Link } from "react-router-dom";
import Patient from "./Patient";

const mockPatients = [
  {
    lastSeen: "14/7/2024",
    name: "Jane Black",
    address: "Auckland",
    email: "xxx@gmail.com",
    gender: "prefer not to respond",
    birthDate: "14/2/2000",
  },
  {
    lastSeen: "14/7/2024",
    name: "Jane Black",
    address: "Auckland",
    email: "xxx@gmail.com",
    gender: "prefer not to respond",
    birthDate: "14/2/2000",
  },
  {
    lastSeen: "14/7/2024",
    name: "Jane Black",
    address: "Auckland",
    email: "xxx@gmail.com",
    gender: "prefer not to respond",
    birthDate: "14/2/2000",
  },
  {
    lastSeen: "14/7/2024",
    name: "Jane Black",
    address: "Auckland",
    email: "xxx@gmail.com",
    gender: "prefer not to respond",
    birthDate: "14/2/2000",
  },
];

function Patients() {
  const allPatients = mockPatients.map((p, i) => (
    <Patient patientInfo={p} key={i} />
  ));
  return (
    <div className="container p-4 mx-auto">
      <div className="flex items-center">
        <Link to="/">
          <img className="w-16 h-16 mr-2" src={Icon} alt="Icon" />
        </Link>
        <div className="text-3xl text-white font-bold">My Patients</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-6">
        <div className="bg-white/60 duration-200 hover:bg-white/90 rounded-3xl shadow-lg p-6 mt-4 ">
          <div className="flex items-center justify-center h-full gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#666666"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <Link
              to="/add-patient"
              className="text-4xl text-[#666666] font-bold"
            >
              New Patient
            </Link>
          </div>
        </div>
        {allPatients}
      </div>
    </div>
  );
}

export default Patients;
