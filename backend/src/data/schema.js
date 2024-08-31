import mongoose from "mongoose";

const Schema = mongoose.Schema;

const patientSchema = new Schema(
    {
        name: { type: String, required: true },
        prescriptions: { type: Array, required: true }

    }
);

const Patient = mongoose.model("Patient", articleSchema);

export { Patient };