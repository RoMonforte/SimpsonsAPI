const {Model, DataTypes, Sequelize} = require('sequelize');

const LOCATION_TABLE = 'locations'
const URL = 'http://localhost:3000/api/v1/locations/'

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
  url: {
    type: DataTypes.VIRTUAL,
    get() {
      id = this.id;
      let url = `${URL}${id}`;
      return url;

    }
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Location extends Model {
  static associate(models) {
    this.belongsToMany(models.Character, {
      as: 'characters',
      through: models.CharacterLocation,
      foreignKey: 'locationId',
      otherKey: 'characterId'
    });
    this.belongsToMany(models.Episode, {
      as: 'episodes',
      through: models.EpisodeLocation,
      foreignKey: 'locationId',
      otherKey: 'episodeId'
    });
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
