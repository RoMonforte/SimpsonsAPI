'use strict';
const {CharacterSchema, CHARACTER_TABLE} = require('../models/character.model');
const {EpisodeSchema, EPISODE_TABLE} = require('../models/episode.model');
const {LocationSchema, LOCATION_TABLE} = require('../models/location.model');

const {CharacterEpisodeSchema, CHARACTER_EPISODE_TABLE} = require('../models/character-episode.model');
const {CharacterLocationSchema, CHARACTER_LOCATION_TABLE} = require('../models/character-location.model');
const {EpisodeLocationSchema, EPISODE_LOCATION_TABLE} = require('../models/episode-location.model');






/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.dropTable(CHARACTER_EPISODE_TABLE);
    await queryInterface.dropTable(CHARACTER_LOCATION_TABLE);
    await queryInterface.dropTable(EPISODE_LOCATION_TABLE);

    await queryInterface.dropTable(LOCATION_TABLE);
    await queryInterface.dropTable(EPISODE_TABLE);
    await queryInterface.dropTable(CHARACTER_TABLE);

    await queryInterface.createTable(CHARACTER_EPISODE_TABLE, CharacterEpisodeSchema);
    await queryInterface.createTable(CHARACTER_LOCATION_TABLE, CharacterLocationSchema);
    await queryInterface.createTable(EPISODE_LOCATION_TABLE, EpisodeLocationSchema);

    await queryInterface.createTable(LOCATION_TABLE, LocationSchema);
    await queryInterface.createTable(EPISODE_TABLE, EpisodeSchema);
    await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
