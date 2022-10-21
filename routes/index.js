const express = require('express');

const charactersRouter = require('./characters.router');
const locationsRouter = require('./locations.router')
const episodesRouter = require('./episodes.router')

  function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/characters', charactersRouter);
    router.use('/locations', locationsRouter);
    router.use('/episodes', episodesRouter);
}

module.exports = routerApi
