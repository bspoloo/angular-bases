import { CharacterInterface } from "../interfaces/characterInterface";


export class CharacterDBZ{
  private charcatersDBZ : CharacterInterface[];
  constructor(){
    this.charcatersDBZ = [
      {
        name: 'Krillin',
        power: 500,
      },
      {
        name: 'Goku',
        power: 10000,
      },
      {
        name: 'Bulma',
        power: 10,
      }
    ]
  }
  public getCharacters() : CharacterInterface[]{
    return this.charcatersDBZ;
  }
}
