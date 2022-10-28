const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const type = Joi.string().min(3);
const firstEpisodeId = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();



const createLocationSchema = Joi.object({
  name: name.required(),
  type: type.required(),
  firstEpisodeId: firstEpisodeId.required(),
})

const updateLocationSchema = Joi.object({
  name: name,
  type: type,
  firstEpisodeId: firstEpisodeId
});

const getLocationSchema = Joi.object({
  id: id.required(),
})

const queryLocationSchema = Joi.object({
  limit,
  offset,
  name,
  type,
  firstEpisodeId
});

module.exports = {createLocationSchema, updateLocationSchema, getLocationSchema, queryLocationSchema};
