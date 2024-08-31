import { Patient } from "./schema.js";

async function createPatient(patient) {
  const dbPatient = new Patient(patient);
  await dbPatient.save();
  return dbPatient;
}

async function retrievePatientList() {
  return await Patient.find();
}

async function retrievePatient(id) {
  return await Patient.findById(id);
}

async function updatePatient(patient) {
  const dbPatient = await Patient.findOneAndUpdate(
    { _id: patient._id },
    patient
  );
  return dbPatient !== undefined;
}

async function deletePatient(id) {
  await Patient.deleteOne({ _id: id });
}

export {
  createPatient,
  retrievePatient,
  retrievePatientList,
  updatePatient,
  deletePatient,
};