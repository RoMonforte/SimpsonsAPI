const express = require('express');

const UsersService = require('../services/users.service');
const validatorHandler = require('../middlewares/validator.handler');
const {createUserSchema, updateUserSchema, getUserSchema} = require('../schemas/user.schema');

const router = express.Router();
const service = new UsersService();

router.get('/',
async (req,res,next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (err) {
    next(err)
  }

});


router.get('/:id',
validatorHandler(getUserSchema, 'params'),
async (req,res, next) => {
  try{
  const {id} = req.params;
  const user = await service.findOne(id);
  res.json(user);
  } catch (err){
    next(err);
  }
});


router.post('/',
validatorHandler(createUserSchema, 'body'),
  async (req,res) => {

      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);

  });

router.patch('/:id',
validatorHandler(getUserSchema, 'params'),
validatorHandler(updateUserSchema, 'body'),
async (req,res, next) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const user = await service.update(id,body);
  res.json(user);
  } catch (err) {
    next(err);
  }
});


router.delete('/:id',
validatorHandler(getUserSchema, 'params'),
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
