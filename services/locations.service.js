const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Episode } = require('../db/models/episode.model');
const { Character } = require('../db/models/character.model');

class LocationsService {

  constructor(){}


  async create(data) {
    const newLocation = await models.Location.create(data)
    return newLocation;
  }


  async find() {
    const rta = await models.Location.findAll();
    return rta;

  }


  async findOne(id) {
    const location = await models.Location.findByPk(id, {
      include: [
        {
          model: Episode,
          required: false,
          as: 'episodes',
          attributes: ['name','url'],
            through: {
              attributes: []
            }
        },         {
          model: Character,
          required: false,
          as: 'characters',
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
      ]
      });
    if(!location) {
      throw boom.notFound('Location not found!')
    }
    return location;
  }


  async update(id, changes) {
    const location = await this.findOne(id);
    const rta = await location.update(changes);
    return rta;
  }


  async delete(id){
    const location = await this.findOne(id);
    await location.destroy();
    return { id };
  }
}

module.exports = LocationsService;
