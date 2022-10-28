const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const airDate = Joi.date();
const episode = Joi.number().integer();
const season = Joi.number().integer();
const episodeId = Joi.number().integer();
const locationId = Joi.number().integer();
const url = Joi.string().min(3);

const limit = Joi.number().integer();
const offset = Joi.number().integer();



const createEpisodeSchema = Joi.object({
  name: name.required(),
  airDate: airDate.required(),
  season: season.required(),
  episode: episode.required(),
})

const updateEpisodeSchema = Joi.object({
  name: name,
  airDate: airDate,
  season: season,
  episode: episode,
  url: url
});

const getEpisodeSchema = Joi.object({
  id: id.required(),
})
const addLocationSchema = Joi.object({
  episodeId: episodeId.required(),
  locationId: locationId.required()
});

const queryEpisodeSchema = Joi.object({
  limit,
  offset,
  season,
  name,
  episode,
});

module.exports = {createEpisodeSchema, updateEpisodeSchema, getEpisodeSchema, addLocationSchema,queryEpisodeSchema};
