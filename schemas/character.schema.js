const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const status = Joi.string().min(3).max(15);
const occupation = Joi.string().min(3);
const gender = Joi.string().min(3).max(15);
const origin = Joi.string().min(3).max(15);
const image = Joi.string().min(3).max(15);
const characterId = Joi.number().integer();
const episodeId = Joi.number().integer();
const firstEpisodeId = Joi.number().integer();
const locationId = Joi.number().integer();
const url = Joi.string().min(3);

const limit = Joi.number().integer();
const offset = Joi.number().integer();


const createCharacterSchema = Joi.object({
  name: name.required(),
  status: status.required(),
  occupation: occupation.required(),
  gender: gender.required(),
  origin: origin.required(),
  image: image.required(),
  firstEpisodeId: firstEpisodeId.required()
})

const updateCharacterSchema = Joi.object({
  name: name,
  status: status,
  occupation: occupation,
  gender: gender,
  origin: origin,
  image: image,
  firstEpisodeId: firstEpisodeId,
  url: url
});

const getCharacterSchema = Joi.object({
  id: id.required(),
})

const addEpisodeSchema = Joi.object({
  characterId: characterId.required(),
  episodeId: episodeId.required()
});
const addLocationSchema = Joi.object({
  characterId: characterId.required(),
  locationId: locationId.required()
});

const queryCharacterSchema = Joi.object({
  limit,
  offset,
  firstEpisodeId,
  name,
  status,
  gender,
  occupation,
  origin
});


module.exports = {createCharacterSchema, updateCharacterSchema, getCharacterSchema, addEpisodeSchema, addLocationSchema, queryCharacterSchema};
