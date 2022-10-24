const express = require('express');

const CharactersService = require('../services/characters.service');
const validatorHandler = require('../middlewares/validator.handler');
const {createCharacterSchema, updateCharacterSchema, getCharacterSchema, addEpisodeSchema, addLocationSchema, queryCharacterSchema} = require('../schemas/character.schema')

const router = express.Router();
const service = new CharactersService();

router.get('/',
validatorHandler(queryCharacterSchema, 'query'),
async (req,res,next) => {
  try {
    const characters = await service.find(req.query);
    res.json(characters);
  } catch (err) {
    next(err)
  }

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


router.post('/add-episode',
validatorHandler(addEpisodeSchema, 'body'),
  async (req,res,next) => {
    try {
      const body = req.body;
      const newEpisode = await service.addEpisode(body);
      res.status(201).json(newEpisode);
    } catch (err) {
      next(err);
    }

});

router.post('/add-location',
validatorHandler(addLocationSchema, 'body'),
  async (req,res,next) => {
    try{
      const body = req.body;
      const newLocation = await service.addLocation(body);
      res.status(201).json(newLocation);
    } catch (err) {
      next(err)
    }

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
