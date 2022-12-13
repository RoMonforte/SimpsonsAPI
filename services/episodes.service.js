const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

const { Character } = require('../db/models/character.model');
const { Location } = require('../db/models/location.model');

const URL = 'https://afternoon-tor-34419.herokuapp.com//api/v1/episodes/'

class EpisodesService {

  constructor(){}


  async create(data) {
    const newEpisode = await models.Episode.create(data)
    let id =  await newEpisode.id
    let url = `${URL}${id}`
    let changes = {
      ...data,
      url
    }
    const episode = await this.findOne(id);
    const rta = await episode.update(changes);
    return rta;
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


  async find(query) {
    const options = {
      where: {}
    }
    const {limit, offset} = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    const {season} = query;
    if (season) {
      options.where.season = season;
    }
    const {name} = query;
    if (name) {
      options.where.name = name;
    }
    const {episode} = query;
    if (episode) {
      options.where.episode= episode;
    }
    const rta = await models.Episode.findAll(options);
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
