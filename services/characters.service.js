const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CharactersService {

  constructor(){}


  async create(data) {
    const newCharacter = await models.Character.create(data)
    return newCharacter;
  }

  async addEpisode(data) {
    const newEpisode = await models.CharacterEpisode.create(data)
    return newEpisode;
  }


  async find() {
    const rta = await models.Character.findAll();
    return rta;

  }


  async findOne(id) {
    const character = await models.Character.findByPk(id, {
      include: [
        'episodes',
        'first_episode'
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
