const {Character, CharacterSchema} = require('./character.model');
const {Episode, EpisodeSchema} = require('./episode.model');
const {Location, LocationSchema} = require('./location.model');

const {CharacterEpisode, CharacterEpisodeSchema} = require('./character-episode.model');
const {CharacterLocation, CharacterLocationSchema} = require('./character-location.model');
const {EpisodeLocation, EpisodeLocationSchema} = require('./episode-location.model');



function setupModels(sequelize) {
  Character.init(CharacterSchema, Character.config(sequelize));
  Episode.init(EpisodeSchema, Episode.config(sequelize));
  Location.init(LocationSchema, Location.config(sequelize));
  CharacterEpisode.init(CharacterEpisodeSchema, CharacterEpisode.config(sequelize));
  CharacterLocation.init(CharacterLocationSchema, CharacterLocation.config(sequelize));
  EpisodeLocation.init(EpisodeLocationSchema, EpisodeLocation.config(sequelize));

  Episode.associate(sequelize.models);
  Character.associate(sequelize.models);
  Location.associate(sequelize.models);
}

module.exports = setupModels;
