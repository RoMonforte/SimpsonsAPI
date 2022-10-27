const {Model, DataTypes, Sequelize} = require('sequelize');
const {EPISODE_TABLE} = require('./episode.model');


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
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  firstEpisodeId: {
    field: 'first_episode_id',
    type: DataTypes.INTEGER,
    references: {
      model: EPISODE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE' ,
    onDelete: 'SET NULL'
  }
}

class Location extends Model {
  static associate(models) {
    this.belongsTo(models.Episode, {as: 'first_episode'});
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
