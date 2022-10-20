const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CharactersService {

  constructor(){
        this.characters = [{id: "1", name: 'Homer', age: 45, isBlock: true},{id: "2",name: 'Marge', age: 44, isBlock: false}];
  }


  async create(data) {
    const newCharacter = await models.Character.create(data)
    return newCharacter;
  }


  async find() {
    const rta = await models.Character.findAll();
    return rta;

  }


  async findOne(id) {
    const character = await models.Character.findByPk(id);
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
    return {id};
  }
}

module.exports = CharactersService;
