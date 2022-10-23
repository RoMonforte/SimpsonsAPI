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
  episode: {
    allowNull: false,
    type: DataTypes.STRING
  },
  characters: {
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

class Episode extends Model {
  static associate(models) {
      this.hasMany(models.Character, {
        as: 'first_episode_characters',
        foreignKey: 'firstEpisodeId'
      })
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
