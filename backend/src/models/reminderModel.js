import Joi from 'joi';

const reminderSchema = Joi.object({
  userId: Joi.string().required(),
  prescriptionId: Joi.string().required(),
  prescriptionName: Joi.string().required(),
  medicationName: Joi.string().required(),
  medicationDetails: Joi.string().required(),
  administrationInstructions: Joi.string().required(),
  additionalDetails: Joi.string().allow(''),
  schedule: Joi.array().items(Joi.string()).required(),
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().allow(null),
  nextReminder: Joi.date().iso().required(),
  createdAt: Joi.date().iso().default(() => new Date().toISOString()),
  updatedAt: Joi.date().iso().default(() => new Date().toISOString()),
});

function validate(data) {
  const { error, value } = reminderSchema.validate(data);
  if (error) throw new Error(error.details[0].message);
  return value;
}

export default validate;
