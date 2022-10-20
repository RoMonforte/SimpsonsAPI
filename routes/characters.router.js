const express = require('express');

const CharactersService = require('../services/characters.service');
const validatorHandler = require('../middlewares/validator.handler');
const {createCharacterSchema, updateCharacterSchema, getCharacterSchema} = require('../schemas/character.schema')

const router = express.Router();
const service = new CharactersService();

router.get('/', async (req,res) => {
  const characters = await service.find();
  res.json(characters);
});

router.get('/:id',
validatorHandler(getCharacterSchema, 'params'),
async (req,res, next) => {
  try{
  const {id} = req.params;
  const character = await service.findOne(id);
  res.json(character);
  } catch (err){
    next(err);
  }
});

router.post('/',
validatorHandler(createCharacterSchema, 'body'),
  async (req,res) => {
  const body = req.body;
  const newCharacter = await service.create(body);
  res.status(201).json(newCharacter);
});

router.patch('/:id',
validatorHandler(getCharacterSchema, 'params'),
validatorHandler(updateCharacterSchema, 'body'),
async (req,res, next) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const character = await service.update(id,body);
  res.json(character);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id',
validatorHandler(getCharacterSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(201).json({id});
  } catch (error) {
    next(error);
  }
});

module.exports = router;
