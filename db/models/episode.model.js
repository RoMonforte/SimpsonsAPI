const {Model, DataTypes, Sequelize} = require('sequelize');

const EPISODE_TABLE = 'episodes'
const URL = 'http://localhost:3000/api/v1/episodes/'

const EpisodeSchema = {
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
  airDate: {
    field: 'air_date',
    allowNull: false,
    type: DataTypes.DATE
  },
  season: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  episode: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  url: {
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Episode extends Model {
  static associate(models) {
      this.hasMany(models.Character, {
        as: 'debute_characters',
        foreignKey: 'first_episode_id'
      });
      this.hasMany(models.Location, {
        as: 'debute_locations',
        foreignKey: 'first_episode_id'
      });
      this.belongsToMany(models.Location, {
        as: 'locations',
        through: models.EpisodeLocation,
        foreignKey: 'episodeId',
        otherKey: 'locationId'
      });
      this.belongsToMany(models.Character, {
        as: 'characters',
        through: models.CharacterEpisode,
        foreignKey: 'episodeId',
        otherKey: 'characterId'
      });

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: EPISODE_TABLE,
      modelName: 'Episode',
      timestamps: false
    }
  }
}

module.exports = {EPISODE_TABLE, EpisodeSchema, Episode}
