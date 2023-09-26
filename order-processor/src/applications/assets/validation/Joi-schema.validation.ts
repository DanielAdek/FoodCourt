import * as Joi from '@hapi/joi';

export const createOrderSchema = Joi.object({
  completed: Joi.boolean().required(),
  cancelled: Joi.boolean(),
  kitchenCancelled: Joi.boolean(),
  // Add other properties and validation rules as needed
});

export const updateOrderSchema = Joi.object({
  completed: Joi.boolean(),
  cancelled: Joi.boolean(),
  kitchenCancelled: Joi.boolean(),
  // Add other properties and validation rules as needed
});
