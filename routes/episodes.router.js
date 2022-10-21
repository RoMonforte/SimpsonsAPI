const express = require('express');

const EpisodesService = require('../services/episodes.service');
const validatorHandler = require('../middlewares/validator.handler');
const {createEpisodeSchema, updateEpisodeSchema, getEpisodeSchema} = require('../schemas/episode.schema');

const router = express.Router();
const service = new EpisodesService();

router.get('/', async (req,res) => {
  const episodes = await service.find();
  res.json(episodes);
});

router.get('/:id',
validatorHandler(getEpisodeSchema, 'params'),
async (req,res, next) => {
  try{
  const {id} = req.params;
  const episode = await service.findOne(id);
  res.json(episode);
  } catch (err){
    next(err);
  }
});

router.post('/',
validatorHandler(createEpisodeSchema, 'body'),
  async (req,res) => {
  const body = req.body;
  const newEpisode = await service.create(body);
  res.status(201).json(newEpisode);
});

router.patch('/:id',
validatorHandler(getEpisodeSchema, 'params'),
validatorHandler(updateEpisodeSchema, 'body'),
async (req,res, next) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const episode = await service.update(id,body);
  res.json(episode);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id',
validatorHandler(getEpisodeSchema, 'params'),
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
