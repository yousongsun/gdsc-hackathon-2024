import express from "express";

const router = express.Router();

// import child routes

import uploadRoutes from "./api-uploads.js";
router.use("/uploads", uploadRoutes);

export default router;