import express from "express";

const router = express.Router();

// import child routes

import uploadRoutes from "./api-uploads.js";
import prescriptions from "./prescriptions.js";
import ReminderController from "../../controllers/reminderController.js";

router.use("/uploads", uploadRoutes);
router.use("/prescriptions", prescriptions);


router.post('/createReminder', ReminderController.createReminder);
router.get('/user/:userId', ReminderController.getReminders);
router.get('/check', ReminderController.checkReminders);


export default router;
