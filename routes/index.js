const express = require('express');

const charactersRouter = require('./characters.router');
const locationsRouter = require('./locations.router')
const episodesRouter = require('./episodes.router')
const usersRouter = require('./users.router')
const authRouter = require('./auth.router');

  function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/characters', charactersRouter);
    router.use('/locations', locationsRouter);
    router.use('/episodes', episodesRouter);
    router.use('/users', usersRouter);
    router.use('/auth', authRouter);
}

module.exports = routerApi
