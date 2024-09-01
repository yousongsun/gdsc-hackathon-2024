import { Link } from "react-router-dom";
import Icon from "../assets/icon.jpg";
import HomePrspItem from "./HomePrspItem";
const mockPatient = {
  _id: "1",
  lastSeen: "14/7/2024",
  name: "Jane Black",
  address: "Auckland",
  email: "xxx@gmail.com",
  gender: "prefer not to respond",
  birthDate: "14/2/2000",
};
const prsps = [
  {
    hours: 2,
    minutes: 25,
    prspName: "Amoxicillin",
    amount: 400,
    dosage: 2,
    taken: 4,
    total: 14,
    form: "tablets",
    unit: "mg",
  },
  {
    hours: 2,
    minutes: 25,
    prspName: "Metformin",
    amount: 500,
    dosage: 4,
    taken: 26,
    total: 55,
    form: "tablets",
    unit: "mg",
  },
  {
    hours: 3,
    minutes: 5,
    prspName: "Nivolumab",
    amount: 100,
    dosage: 10,
    taken: 4,
    total: 12,
    form: "ml",
    unit: "mg",
  },
  {
    hours: 9,
    minutes: 25,
    prspName: "Pembrolizumab",
    amount: 25,
    dosage: 4,
    taken: 10,
    total: 14,
    form: "ml",
    unit: "mg",
  },
  {
    hours: 12,
    minutes: 25,
    prspName: "Semaglutide",
    amount: 3,
    dosage: 1,
    taken: 9,
    total: 10,
    form: "tablet",
    unit: "mg",
  },
  {
    hours: 12,
    minutes: 25,
    prspName: "Losartan",
    amount: 50,
    dosage: 3,
    taken: 15,
    total: 24,
    form: "tablets",
    unit: "mg",
  },
];
function PatientDetail() {
  const prescriptions = prsps.map((p, index) => (
    <div
      key={index}
      className="bg-white/60 duration-200 hover:bg-white/90 my-4 p-6 rounded-3xl h-64"
    >
      <HomePrspItem prspInfo={p} />
    </div>
  ));
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
        <br />
        <div className="container p-4 mx-auto">{prescriptions}</div>
      </div>
    </div>
  );
}

export default PatientDetail;
