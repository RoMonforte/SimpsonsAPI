const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const username = Joi.string().min(3);
const password = Joi.string().min(5);




const createUserSchema = Joi.object({
  name: name.required(),
  username: username.required(),
  password: password.required(),
})

const updateUserSchema = Joi.object({
  name: name,
  username: username,
  password: password
});

const getUserSchema = Joi.object({
  id: id.required(),
})

module.exports = {createUserSchema, updateUserSchema, getUserSchema};
