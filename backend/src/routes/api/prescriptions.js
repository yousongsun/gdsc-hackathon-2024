import express from "express";
import { Prescription } from "../../data/prescriptionSchema.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const prsps = await Prescription.find();
    res.status(200).json(prsps);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Could not retrieve prescriptions" });
  }
});

router.post("/", async (req, res) => {
  const newPrsp = req.body;
  const p = await Prescription.create(newPrsp);
  res.status(201).json(p);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Prescription.deleteOne({ _id: id });
  res.sendStatus(204);
});

export default router;
