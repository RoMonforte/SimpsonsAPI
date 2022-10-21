const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const airDate = Joi.date();
const episode = Joi.string().min(3).max(15);
const characters = Joi.array().items(Joi.string());
const url = Joi.string().min(3).max(15);


const createEpisodeSchema = Joi.object({
  name: name.required(),
  airDate: airDate.required(),
  episode: episode.required(),
  characters: characters.required(),
  url: url.required(),
})

const updateEpisodeSchema = Joi.object({
  name: name,
  airDate: airDate,
  episode: episode,
  characters: characters,
  url: url,
});

const getEpisodeSchema = Joi.object({
  id: id.required(),
})

module.exports = {createEpisodeSchema, updateEpisodeSchema, getEpisodeSchema};
