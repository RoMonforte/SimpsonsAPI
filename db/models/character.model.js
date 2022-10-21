const {Model, DataTypes, Sequelize} = require('sequelize');

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
  episodes: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING
  },
  firstEpisode: {
    field: 'first_episode',
    type: DataTypes.STRING
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

class Character extends Model {
  static associate() {
      //models
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
