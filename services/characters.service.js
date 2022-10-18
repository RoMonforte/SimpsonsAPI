class CharactersService {

  constructor(){
    this.characters = [{id: "1", name: 'Homer', age: 45},{id: "2",name: 'Marge', age: 44}];
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
    return this.characters;
  }
  async findOne(id) {
    return this.characters.find(item => item.id === id);
  }
  async update(id, changes) {
    const index = this.characters.findIndex(item => item.id === id);
    if(index === -1) {
      throw new Error('Product not found!');
    }
    const character = this.characters[index]
    this.characters[index] = {...character, ...changes};
    return this.characters[index];
  }
  async delete(id){
    const index = this.characters.findIndex(item => item.id === id);
    if(index === -1) {
      throw new Error('Character not found!');
    }
    this.characters.splice(index, 1);
    return { id };
  }
}

module.exports = CharactersService;
