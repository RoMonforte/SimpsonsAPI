const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const lastName = Joi.string().min(3).max(15);
const age = Joi.number().integer().min(1);

const createCharacterSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  age: age.required()
})

const updateCharacterSchema = Joi.object({
  name: name,
  lastName: lastName,
  age: age
})

const getCharacterSchema = Joi.object({
  id: id.required(),
})

module.exports = {createCharacterSchema, updateCharacterSchema, getCharacterSchema};
