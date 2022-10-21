'use strict';

const {EpisodeSchema, EPISODE_TABLE} = require('../models/episode.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(EPISODE_TABLE, EpisodeSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(EPISODE_TABLE);
  }
};
