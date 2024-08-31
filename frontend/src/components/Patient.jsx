import { Link } from "react-router-dom";

function Patient(props) {
  const { patientInfo } = props;
  return (
    <Link to={`/patients/${patientInfo.name}`}>
      <div className="bg-white/60 hover:bg-white/90 duration-200 rounded-3xl shadow-lg p-6 mt-4">
        <h2 className="text-lg text-[#666666] font-bold mb-2">
          Last Seen {patientInfo.lastSeen}
        </h2>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold mb-2">{patientInfo.name}</h2>
        </div>
        <h2 className="text-xl font-semibold mb-2">{patientInfo.address}</h2>
        <h2 className="text-xl font-semibold mb-2">{patientInfo.email}</h2>
        <h2 className="text-xl font-semibold mb-2">{patientInfo.gender}</h2>
        <h2 className="text-xl font-semibold mb-2">{patientInfo.birthDate}</h2>
      </div>
    </Link>
  );
}

export default Patient;
