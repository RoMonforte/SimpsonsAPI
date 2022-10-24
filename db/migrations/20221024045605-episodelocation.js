'use strict';
const {EpisodeLocationSchema, EPISODE_LOCATION_TABLE} = require('../models/episode-location.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(EPISODE_LOCATION_TABLE, EpisodeLocationSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(EPISODE_LOCATION_TABLE);
  }
};
