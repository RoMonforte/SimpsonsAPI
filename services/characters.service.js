const boom = require('@hapi/boom');
const { Episode } = require('../db/models/episode.model');
const { Location } = require('../db/models/location.model');
const { models } = require('../libs/sequelize');

class CharactersService {

  constructor(){}


  async create(data) {
    const newCharacter = await models.Character.create(data)
    return newCharacter;
  }

  async addEpisode(data) {
    const character = await models.Character.findByPk(data.characterId);
    const episode = await models.Episode.findByPk(data.episodeId);
    if(!character) {
      throw boom.notFound('Character not found!');
    } else if (!episode){
      throw boom.notFound('Episode not found!')
    } else {
      const newEpisode = await models.CharacterEpisode.create(data);
      return newEpisode;
    }
  }


  async addLocation(data) {
    const character = await models.Character.findByPk(data.characterId);
    const location = await models.Location.findByPk(data.locationId);
    if(!character) {
      throw boom.notFound('Character not found!');
    } else if (!location){
      throw boom.notFound('Location not found!')
    } else {
      const newLocation = await models.CharacterLocation.create(data);
      return newLocation;
    }
  }


  async find(query) {
    const options = {
      where: {}
    }
    const {limit, offset} = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    const {firstEpisodeId} = query;
    if (firstEpisodeId) {
      options.where.firstEpisodeId = firstEpisodeId;
    }
    const {name} = query;
    if (name) {
      options.where.name = name;
    }
    const {episodeName} = query;
    if (episodeName) {
      options.where.episodes= name;
    }
    const rta = await models.Character.findAll(options);
    return rta;

  }



  async findOne(id) {
    const character = await models.Character.findByPk(id, {
      include: [
        {
          model: Episode,
          required: false,
          as: 'episodes',
          attributes: ['name','url'],
          through: {
            attributes: []
          }
        },
        {
          model: Episode,
          required: false,
          as: 'first_episode',
          attributes: ['name','url'],
        },
        {
          model: Location,
          required: false,
          as: 'locations',
          attributes: ['name','url'],
          through: {
            attributes: []
          }
        }
      ]
    });
    if(!character) {
      throw boom.notFound('Character not found!')
    }
    return character;
  }


  async update(id, changes) {
    const character = await this.findOne(id);
    const rta = await character.update(changes);
    return rta;
  }


  async delete(id){
    const character = await this.findOne(id);
    await character.destroy();
    return { id };
  }
}

module.exports = CharactersService;
