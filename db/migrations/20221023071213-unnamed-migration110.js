'use strict';
const {CharacterSchema, CHARACTER_TABLE} = require('../models/character.model');
const {EpisodeSchema, EPISODE_TABLE} = require('../models/episode.model');
const {CharacterEpisodeSchema, CHARACTER_EPISODE_TABLE} = require('../models/character-episode.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);
    await queryInterface.createTable(CHARACTER_EPISODE_TABLE, CharacterEpisodeSchema);
  },

  async down (queryInterface, Sequelize) {
//    await queryInterface.dropTable(CHARACTER_TABLE);
 //   await queryInterface.dropTable(EPISODE_TABLE);
  //  await queryInterface.dropTable(CHARACTER_EPISODE_TABLE);
  }
};
