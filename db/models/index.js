const {Character, CharacterSchema} = require('./character.model');
const {Episode, EpisodeSchema} = require('./episode.model');

function setupModels(sequelize) {
  Character.init(CharacterSchema, Character.config(sequelize));
  Episode.init(EpisodeSchema, Episode.config(sequelize));
}

module.exports = setupModels;
