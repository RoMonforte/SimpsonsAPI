const express = require('express');

const LocationsService = require('../services/locations.service');
const validatorHandler = require('../middlewares/validator.handler');
const {createLocationSchema, updateLocationSchema, getLocationSchema, queryLocationSchema} = require('../schemas/location.schema')
const {checkRoles} = require ('../middlewares/auth.handler');
const passport = require('passport');
const router = express.Router();
const service = new LocationsService();

router.get('/',
validatorHandler(queryLocationSchema, 'query'),
async (req,res,next) => {
  try {
    const locations = await service.find(req.query);
    res.json(locations);
  } catch (err) {
    next(err)
  }

});
router.get('/:id',
validatorHandler(getLocationSchema, 'params'),
async (req,res, next) => {
  try{
  const {id} = req.params;
  const location = await service.findOne(id);
  res.json(location);
  } catch (err){
    next(err);
  }
});

router.post('/',
passport.authenticate('jwt', {session: false}),
checkRoles('superadmin','helper'),
validatorHandler(createLocationSchema, 'body'),
  async (req,res) => {
  const body = req.body;
  const newLocation = await service.create(body);
  res.status(201).json(newLocation);
});

router.patch('/:id',
passport.authenticate('jwt', {session: false}),
checkRoles('superadmin','helper'),
validatorHandler(getLocationSchema, 'params'),
validatorHandler(updateLocationSchema, 'body'),
async (req,res, next) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const location = await service.update(id,body);
  res.json(location);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id',
passport.authenticate('jwt', {session: false}),
checkRoles('superadmin','helper'),
validatorHandler(getLocationSchema, 'params'),
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

