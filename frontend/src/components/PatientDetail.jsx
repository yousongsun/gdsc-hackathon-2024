import { Link } from "react-router-dom";
import Icon from "../assets/icon.jpg";
import Patient from "./Patient";
const mockPatient = {
  _id: "1",
  lastSeen: "14/7/2024",
  name: "Jane Black",
  address: "Auckland",
  email: "xxx@gmail.com",
  gender: "prefer not to respond",
  birthDate: "14/2/2000",
};

function PatientDetail(props) {
  return (
    <div className="container p-4 mx-auto">
      <div className="flex items-center">
        <Link to="/">
          <img className="w-16 h-16 mr-2" src={Icon} alt="Icon" />
        </Link>
        <div className="text-3xl text-white font-bold">Patient Details</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-6">
        <div className="bg-white/60 duration-200 hover:bg-white/90 rounded-3xl shadow-lg p-6 mt-4 ">
          <h2 className="text-lg text-[#666666] font-bold mb-2">
            Last Seen {mockPatient.lastSeen}
          </h2>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold mb-2">{mockPatient.name}</h2>
          </div>
          <h2 className="text-xl font-semibold mb-2">{mockPatient.address}</h2>
          <h2 className="text-xl font-semibold mb-2">{mockPatient.email}</h2>
          <h2 className="text-xl font-semibold mb-2">{mockPatient.gender}</h2>
          <h2 className="text-xl font-semibold mb-2">
            {mockPatient.birthDate}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default PatientDetail;
