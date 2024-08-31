import admin from 'firebase-admin';
import { Prescription } from '../data/prescriptionSchema.js';
import ReminderModel from '../models/reminderModel.js';
// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://medtracker-15461-default-rtdb.asia-southeast1.firebasedatabase.app/'
  });
  
const db = admin.firestore();


async function createReminder(req, res) {
  try {
    const { prescriptionId, userId, schedule, startDate, endDate } = req.body;

    // Fetch prescription data from MongoDB
    const prescription = await Prescription.findById(prescriptionId);
    if (!prescription) {
      return res.status(404).json({ error: 'Prescription not found' });
    }

    // Prepare reminder data
    const reminderData = {
      userId,
      prescriptionId: prescription._id.toString(),
      prescriptionName: prescription.prescriptionName,
      medicationName: prescription.medicationName,
      medicationDetails: prescription.medicationDetails,
      administrationInstructions: prescription.administrationInstructions,
      additionalDetails: prescription.additionalDetails,
      schedule,
      startDate,
      endDate,
      nextReminder: calculateNextReminder(schedule, startDate),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Validate reminder data
    const validatedData = ReminderModel.validate(reminderData);

    // Save reminder to Firebase
    const docRef = await db.collection('reminders').add(validatedData);

    res.status(201).json({ id: docRef.id, ...validatedData });
  } catch (error) {
    console.error('Error creating reminder:', error);
    res.status(400).json({ error: error.message });
  }
}

async function getReminders(req, res) {
  try {
    const userId = req.params.userId;
    const snapshot = await db.collection('reminders')
      .where('userId', '==', userId)
      .orderBy('nextReminder')
      .get();

    const reminders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(reminders);
  } catch (error) {
    console.error('Error getting reminders:', error);
    res.status(500).json({ error: error.message });
  }
}

async function checkReminders(req, res) {
  try {
    const now = new Date();
    const snapshot = await db.collection('reminders')
      .where('nextReminder', '<=', now.toISOString())
      .get();

    const dueReminders = [];

    for (const doc of snapshot.docs) {
      const reminder = doc.data();
      dueReminders.push({ id: doc.id, ...reminder });

      // Update the next reminder time
      const nextReminder = calculateNextReminder(reminder.schedule, now);
      await doc.ref.update({ 
        nextReminder,
        updatedAt: now.toISOString()
      });
    }

    res.json({ dueReminders, count: dueReminders.length });
  } catch (error) {
    console.error('Error checking reminders:', error);
    res.status(500).json({ error: error.message });
  }
}


function calculateNextReminder(schedule, fromDate) {
  const now = new Date(fromDate);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  let nextReminder = new Date(now);
  nextReminder.setDate(nextReminder.getDate() + 1);  // Start checking from tomorrow
  
  while (true) {
    const dayName = daysOfWeek[nextReminder.getDay()];
    const matchingSchedule = schedule.find(s => s.startsWith(dayName));
    
    if (matchingSchedule) {
      const [, time] = matchingSchedule.split(' ');
      const [hours, minutes] = time.split(':');
      nextReminder.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      break;
    }
    
    nextReminder.setDate(nextReminder.getDate() + 1);
  }
  
  return nextReminder.toISOString();
}
export default  { createReminder, getReminders, checkReminders, calculateNextReminder};
