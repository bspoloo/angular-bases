import { Injectable } from '@angular/core';
import { CharacterInterface } from '../../interfaces/characterInterface';
import { CharacterDBZ } from '../../classes/CharacterDBZ';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private characterDBZ: CharacterDBZ;

  constructor() {
    this.characterDBZ = new CharacterDBZ();
  }

    public getCharacters() : CharacterInterface[]{
      return this.characterDBZ.getCharacters();
    }
    public saveCharacter(character : CharacterInterface): void{
      this.characterDBZ.addCharacter({
        name: character.name,
        power: character.power
      });
    }
    public deleteCharacterByIndex(id : string) : void{
      this.characterDBZ.removeCharacter(id);
    }
}
