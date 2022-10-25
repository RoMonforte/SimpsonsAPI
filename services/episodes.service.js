const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

const { Character } = require('../db/models/character.model');
const { Location } = require('../db/models/location.model');

class EpisodesService {

  constructor(){}


  async create(data) {
    const newEpisode = await models.Episode.create(data)
    return newEpisode;
  }
  async addLocation(data) {
    const episode = await models.Episode.findByPk(data.episodeId);
    const location = await models.Location.findByPk(data.locationId);
    if(!episode) {
      throw boom.notFound('Episode not found!');
    } else if (!location){
      throw boom.notFound('Location not found!')
    } else {
      const newLocation = await models.EpisodeLocation.create(data);
      return newLocation;
    }
  }


  async find() {
    const rta = await models.Episode.findAll();
    return rta;

  }


  async findOne(id) {
    const episode = await models.Episode.findByPk(id, {
      include: [
        {
          model: Character,
          required: false,
          as: 'characters',
          attributes: ['name','url'],
          through: {
            attributes: []
          }
        },
        {
          model: Character,
          required: false,
          as: 'debute_characters',
          attributes: ['name','url'],
        },
        {
          model: Location,
          required: false,
          as: 'debute_locations',
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
    if(!episode) {
      throw boom.notFound('Episode not found!')
    }
    return episode;
  }


  async update(id, changes) {
    const episode = await this.findOne(id);
    const rta = await episode.update(changes);
    return rta;
  }


  async delete(id){
    const episode = await this.findOne(id);
    await episode.destroy();
    return { id };
  }
}

module.exports = EpisodesService;
