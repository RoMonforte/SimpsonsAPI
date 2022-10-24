const {Model, DataTypes, Sequelize} = require('sequelize');
const {LOCATION_TABLE} = require('./location.model');
const {EPISODE_TABLE} = require('./episode.model');

const EPISODE_LOCATION_TABLE = 'episodes_hasLocations'

const EpisodeLocationSchema = {
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
  locationId: {
    field: 'location_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: LOCATION_TABLE,
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

  }
}

class EpisodeLocation extends Model {
  static associate() {
      //models
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: EPISODE_LOCATION_TABLE,
      modelName: 'EpisodeLocation',
      timestamps: false
    }
  }
}

module.exports = {EPISODE_LOCATION_TABLE, EpisodeLocationSchema, EpisodeLocation};
