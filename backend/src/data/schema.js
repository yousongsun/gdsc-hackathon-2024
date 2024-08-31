import mongoose from "mongoose";

const Schema = mongoose.Schema;

const patientSchema = new Schema(
    {
        name: { type: String, required: true },
        date: Date,
    },
    {
        timestamps: {},
    }
);

const Patient = mongoose.model("Patient", articleSchema);

export { Patient };