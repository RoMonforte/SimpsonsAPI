'use strict';

const {LocationSchema, LOCATION_TABLE} = require('../models/location.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(LOCATION_TABLE, LocationSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(LOCATION_TABLE);
  }
};
