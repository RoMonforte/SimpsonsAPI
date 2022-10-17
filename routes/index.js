const express = require('express');

const charactersRouter = require('./characters.router');
const locationsRouter = require('./locations.router')

  function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/characters', charactersRouter);
    router.use('/locations', locationsRouter);
}

module.exports = routerApi
