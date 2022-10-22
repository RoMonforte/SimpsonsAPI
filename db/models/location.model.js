const {Model, DataTypes, Sequelize} = require('sequelize');

const LOCATION_TABLE = 'locations'
const URL = 'http://localhost:3000/api/v1/characters/'

const LocationSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING
  },
  appearedEpisodes: {
    field: 'appeared_episodes',
    allowNull: false,
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  residents: {
    allowNull: false,
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  url: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: `${URL}${this.id}`
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Location extends Model {
  static associate() {
      //models
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: LOCATION_TABLE,
      modelName: 'Location',
      timestamps: false
    }
  }
}

module.exports = {LOCATION_TABLE, LocationSchema, Location};
