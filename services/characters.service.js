const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CharactersService {

  constructor(){}


  async create(data) {
    const newCharacter = await models.Character.create(data)
    return newCharacter;
  }

  async addEpisode(data) {
    const character = await models.Character.findByPk(data.characterId);
    const episode = await models.Episode.findByPk(data.locationId);
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
    const rta = await models.Character.findAll(options);
    return rta;

  }



  async findOne(id) {
    const character = await models.Character.findByPk(id, {
      include: [
        'episodes',
        'first_episode',
        'locations'
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
