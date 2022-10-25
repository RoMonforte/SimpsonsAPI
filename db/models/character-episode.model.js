const {Model, DataTypes, Sequelize} = require('sequelize');
const {CHARACTER_TABLE} = require('./character.model');
const {EPISODE_TABLE} = require('./episode.model');

const CHARACTER_EPISODE_TABLE = 'characters_hasEpisodes'

const CharacterEpisodeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  characterId: {
    field: 'character_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CHARACTER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  episodeId: {
    field: 'episode_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EPISODE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'

  },
}

class CharacterEpisode extends Model {
  static associate() {
      //models
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CHARACTER_EPISODE_TABLE,
      modelName: 'CharacterEpisode',
      timestamps: false
    }
  }
}

module.exports = {CHARACTER_EPISODE_TABLE, CharacterEpisodeSchema, CharacterEpisode};
