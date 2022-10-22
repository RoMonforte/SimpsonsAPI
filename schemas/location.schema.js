const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const type = Joi.string().min(3);
const appearedEpisodes = Joi.array().items(Joi.string());
const residents = Joi.array().items(Joi.string());



const createLocationSchema = Joi.object({
  name: name.required(),
  type: type.required(),
  appearedEpisodes: appearedEpisodes.required(),
  residents: residents.required(),
})

const updateLocationSchema = Joi.object({
  name: name,
  type: type,
  appearedEpisodes: appearedEpisodes,
  residents: residents,
});

const getLocationSchema = Joi.object({
  id: id.required(),
})

module.exports = {createLocationSchema, updateLocationSchema, getLocationSchema};
