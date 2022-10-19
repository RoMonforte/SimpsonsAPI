const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');

class CharactersService {

  constructor(){
        this.characters = [{id: "1", name: 'Homer', age: 45, isBlock: true},{id: "2",name: 'Marge', age: 44, isBlock: false}];
  }


  async create(data) {
    const newCharacter = {
      id: "10" ,
      ...data
    }
    this.characters.push(newCharacter);
    return newCharacter;
  }


  async find() {
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query);
    return data;

  }


  async findOne(id) {
    const character = this.characters.find(item => item.id === id);
    if(!character) {
      throw boom.notFound('Character not found!');
    }
    if(character.isBlock) {
      throw boom.conflict('Character is blocked!');
    }
    return character;
  }


  async update(id, changes) {
    const index = this.characters.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('Character not found!');
    }
    const character = this.characters[index]
    this.characters[index] = {...character, ...changes};
    return this.characters[index];
  }
  async delete(id){
    const index = this.characters.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('Character not found!');
    }
    this.characters.splice(index, 1);
    return { id };
  }
}

module.exports = CharactersService;
