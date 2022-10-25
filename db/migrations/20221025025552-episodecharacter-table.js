'use strict';
const {EpisodeCharacterSchema, EPISODE_CHARACTER_TABLE} = require('../models/episode-character.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(EPISODE_CHARACTER_TABLE, EpisodeCharacterSchema);
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
