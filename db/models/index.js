const {Character, CharacterSchema} = require('./character.model');
const {Episode, EpisodeSchema} = require('./episode.model');
const {Location, LocationSchema} = require('./location.model');

function setupModels(sequelize) {
  Character.init(CharacterSchema, Character.config(sequelize));
  Episode.init(EpisodeSchema, Episode.config(sequelize));
  Location.init(LocationSchema, Location.config(sequelize));
}

module.exports = setupModels;
