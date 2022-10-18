const express = require('express');

const CharactersService = require('../services/characters.service')

const router = express.Router();
const service = new CharactersService();

router.get('/', async (req,res) => {
  const characters = await service.find();
  res.json(characters);
});

router.get('/:id', async (req,res) => {
  const {id} = req.params;
  const character = await service.findOne(id);
  res.json(character);
});

router.post('/', async (req,res) => {
  const body = req.body;
  const newCharacter = await service.create(body);
  res.status(201).json(newCharacter);
});

router.patch('/:id', async (req,res) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const character = await service.update(id,body);
  res.json(character);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
});

router.delete('/:id', async (req,res) => {
  const {id} = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
