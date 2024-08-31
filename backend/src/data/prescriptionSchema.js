import mongoose from "mongoose";

const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  prescriptionName: { type: String, required: true },
  medicationName: { type: String, required: true },
  medicationDetails: { type: String, required: true },
  administrationInstructions: { type: String, required: true },
  additionalDetails: { type: String, required: true },
  lastTakenTime: { type: String, required: true }
});

export const Prescription = mongoose.model("Prescription", prescriptionSchema);
