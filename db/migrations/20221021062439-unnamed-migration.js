'use strict';

const {CharacterSchema, CHARACTER_TABLE} = require('../models/character.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.removeColumn(CHARACTER_TABLE, 'firstEpisode', CharacterSchema.firstEpisode);
    await queryInterface.addColumn(CHARACTER_TABLE, 'first_episode', CharacterSchema.firstEpisode);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(CHARACTER_TABLE, 'firstEpisode');
  }
};
