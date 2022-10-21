const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class EpisodesService {

  constructor(){}


  async create(data) {
    const newEpisode = await models.Episode.create(data)
    return newEpisode;
  }


  async find() {
    const rta = await models.Episode.findAll();
    return rta;

  }


  async findOne(id) {
    const episode = await models.Episode.findByPk(id);
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
