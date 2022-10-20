'use strict';

const {CharacterSchema, CHARACTER_TABLE} = require('../models/character.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(CHARACTER_TABLE);
  }
};
