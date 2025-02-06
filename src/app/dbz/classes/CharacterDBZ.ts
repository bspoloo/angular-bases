import { CharacterInterface } from "../interfaces/characterInterface";
import { v4 as uuid } from "uuid";


export class CharacterDBZ{
  private charactersDBZ : CharacterInterface[];
  constructor(){
    this.charactersDBZ = [];

    this.addCharacter({name: 'Krillin', power: 1000});
    this.addCharacter({name: 'Goku', power: 500000});
    this.addCharacter({name: 'Bulma', power: 10});
    this.addCharacter({name: 'Yamcha', power: 500});
    this.addCharacter({name: 'Magin Boo', power: 500000});
  }

  public getCharacters() : CharacterInterface[]{

    return this.charactersDBZ;
  }
  public addCharacter(character : CharacterInterface): void{
    this.charactersDBZ.push({
      id : uuid(),
      name: character.name,
      power: character.power
    })
  }
  public removeCharacter(id: string){

    this.charactersDBZ = this.charactersDBZ.filter(character => character.id !== id);
    // this.charcatersDBZ.splice(index,1);
  }
}
