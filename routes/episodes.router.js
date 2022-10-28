const express = require('express');
const URL = `http://localhost:3000/api/v1/episodes`;

const EpisodesService = require('../services/episodes.service');
const validatorHandler = require('../middlewares/validator.handler');
const {createEpisodeSchema, updateEpisodeSchema, getEpisodeSchema, addLocationSchema, queryEpisodeSchema} = require('../schemas/episode.schema');

const router = express.Router();
const service = new EpisodesService();

router.get('/',
validatorHandler(queryEpisodeSchema, 'query'),
async (req,res,next) => {
  try {
    const episodes = await service.find(req.query);
    res.json(episodes);
  } catch (err) {
    next(err)
  }

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
  let body = req.body;
  const newEpisode = await service.create(body);

  res.status(201).json(newEpisode);
});

router.post('/add-location',
validatorHandler(addLocationSchema, 'body'),
  async (req,res,next) => {
    try {
      const body = req.body;
      const newLocation = await service.addLocation(body);
      res.status(201).json(newLocation);
    } catch (err) {
      next(err);
    }

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
