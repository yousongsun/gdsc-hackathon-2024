import express from "express";
import { Patient } from "../../data/schema.js";
const router = express.Router();

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const patient = await Patient.findOneById(id);
    res.status(200).json(patient);
});

router.post("/", async (req, res) => {
    const newPatient = req.body;
    const p = await Patient.create(newPatient);
    res.status(201).json(p);
});


