const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

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
    const location = await models.Location.findByPk(id);
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
