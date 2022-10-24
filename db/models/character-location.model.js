const {Model, DataTypes, Sequelize} = require('sequelize');
const {CHARACTER_TABLE} = require('./character.model');
const {LOCATION_TABLE} = require('./location.model');

const CHARACTER_LOCATION_TABLE = 'characters_hasLocations'

const CharacterLocationSchema = {
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

  }
}

class CharacterLocation extends Model {
  static associate() {
      //models
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CHARACTER_LOCATION_TABLE,
      modelName: 'CharacterLocation',
      timestamps: false
    }
  }
}

module.exports = {CHARACTER_LOCATION_TABLE, CharacterLocationSchema, CharacterLocation};
