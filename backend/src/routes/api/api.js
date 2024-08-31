import express from "express";

const router = express.Router();

// import child routes

import uploadRoutes from "./api-uploads.js";
import prescriptions from "./prescriptions.js";

router.use("/uploads", uploadRoutes);
router.use("/prescriptions", prescriptions);

export default router;
