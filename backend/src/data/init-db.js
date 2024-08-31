import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import { createPatient } from "./patients-dao.js";
import { dummyPatients } from "./random-patients.js";
import { Patient } from "./schema.js";

main();

async function main() {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to database!");
    console.log();

    await clearDatabase();
    console.log();

    await addPatients();
    console.log();

    // Disconnect when complete
    await mongoose.disconnect();
    console.log("Disconnected from database!");
}

async function clearDatabase() {
    const patientsDeleted = await Patient.deleteMany({});
    console.log(
        `Cleared database (removed ${patientsDeleted.deletedCount} patients).`
    );
}

async function addPatients() {
    for (let dummyPatient of dummyPatients) {
        const dbPatient = await createPatient(dummyPatient);
        console.log(
            `Patient '${dbPatient.title}' added to database (_id = ${dbPatient._id})`
        );
    }
}