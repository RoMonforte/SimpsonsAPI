const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const type = Joi.string().min(3);



const createLocationSchema = Joi.object({
  name: name.required(),
  type: type.required(),
})

const updateLocationSchema = Joi.object({
  name: name,
  type: type,
});

const getLocationSchema = Joi.object({
  id: id.required(),
})

module.exports = {createLocationSchema, updateLocationSchema, getLocationSchema};
