const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const airDate = Joi.date();
const episode = Joi.string().min(3).max(15);
const episodeId = Joi.number().integer();
const locationId = Joi.number().integer();


const createEpisodeSchema = Joi.object({
  name: name.required(),
  airDate: airDate.required(),
  episode: episode.required(),
})

const updateEpisodeSchema = Joi.object({
  name: name,
  airDate: airDate,
  episode: episode,
});

const getEpisodeSchema = Joi.object({
  id: id.required(),
})
const addLocationSchema = Joi.object({
  episodeId: episodeId.required(),
  locationId: locationId.required()
});

module.exports = {createEpisodeSchema, updateEpisodeSchema, getEpisodeSchema, addLocationSchema};
