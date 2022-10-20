const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const status = Joi.string().min(3).max(15);
const occupation = Joi.string().min(3).max(15);
const gender = Joi.string().min(3).max(15);
const origin = Joi.string().min(3).max(15);
const location = Joi.string().min(3).max(15);
const image = Joi.string().min(3).max(15);
const episode = Joi.string().min(3).max(15);


const createCharacterSchema = Joi.object({
  name: name.required(),
  status: status.required(),
  occupation: occupation.required(),
  gender: gender.required(),
  origin: origin.required(),
  location: location.required(),
  image: image.required(),
  episode: episode.required()
})

const updateCharacterSchema = Joi.object({
  name: name,
  status: status,
  occupation: occupation,
  gender: gender,
  origin: origin,
  location: location,
  image: image,
  episode: episode
});

const getCharacterSchema = Joi.object({
  id: id.required(),
})

module.exports = {createCharacterSchema, updateCharacterSchema, getCharacterSchema};
