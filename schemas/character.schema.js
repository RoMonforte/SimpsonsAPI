const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const status = Joi.string().min(3).max(15);
const occupation = Joi.string().min(3).max(15);
const gender = Joi.string().min(3).max(15);
const origin = Joi.string().min(3).max(15);
const image = Joi.string().min(3).max(15);
const characterId = Joi.number().integer();
const episodeId = Joi.number().integer();
const firstEpisodeId = Joi.number().integer();


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
  firstEpisodeId: firstEpisodeId
});

const getCharacterSchema = Joi.object({
  id: id.required(),
})

const addEpisodeSchema = Joi.object({
  characterId: characterId.required(),
  episodeId: episodeId.required()
});



module.exports = {createCharacterSchema, updateCharacterSchema, getCharacterSchema, addEpisodeSchema};
