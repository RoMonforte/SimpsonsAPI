const {Model, DataTypes, Sequelize} = require('sequelize');
const {EPISODE_TABLE} = require('./episode.model');

const CHARACTER_TABLE = 'characters'
const URL = 'http://localhost:3000/api/v1/characters/'

const CharacterSchema = {
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
  status: {
    allowNull: false,
    type: DataTypes.STRING
  },
  occupation: {
    allowNull: false,
    type: DataTypes.STRING
  },
  gender: {
    allowNull: false,
    type: DataTypes.STRING
  },
  origin: {
    allowNull: false,
    type: DataTypes.STRING
  },
  image: {
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
  },
  firstEpisodeId: {
    field: 'episode_id',
    type: DataTypes.INTEGER,
    references: {
      model: EPISODE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE' ,
    onDelete: 'SET NULL'
  }
}

class Character extends Model {
  static associate(models) {
      this.belongsTo(models.Episode, {as: 'first_episode'});
      this.belongsToMany(models.Episode, {
        as: 'episodes',
        through: models.CharacterEpisode,
        foreignKey: 'characterId',
        otherKey: 'episodeId'
      });
      this.belongsToMany(models.Location, {
        as: 'locations',
        through: models.CharacterLocation,
        foreignKey: 'characterId',
        otherKey: 'locationId'
      })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CHARACTER_TABLE,
      modelName: 'Character',
      timestamps: false
    }
  }
}

module.exports = {CHARACTER_TABLE, CharacterSchema, Character}
