import Joi from 'joi';

export const taskSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required()
});

export const projectSchema = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().required()
});