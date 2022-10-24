'use strict';

const {LocationSchema, LOCATION_TABLE} = require('../models/location.model');
const {CharacterLocationSchema, CHARACTER_LOCATION_TABLE} = require('../models/character-location.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(LOCATION_TABLE, LocationSchema);
    await queryInterface.createTable(CHARACTER_LOCATION_TABLE, CharacterLocationSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(LOCATION_TABLE);
    await queryInterface.drop(CHARACTER_LOCATION_TABLE);
  }
};
