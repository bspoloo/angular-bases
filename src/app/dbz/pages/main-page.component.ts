import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from '../interfaces/characterInterface';
import { CharacterDBZ } from '../classes/CharacterDBZ';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})

export class MainPageComponent  {
  public characters : CharacterInterface[];
  public characterDBZ: CharacterDBZ = new CharacterDBZ();
  constructor() {
    this.characters =  this.characterDBZ.getCharacters();
  }
  public getCharacters() : CharacterInterface[]{
    return this.characters;
  }
  public saveCharacter(character : CharacterInterface): void{
    this.characters.push({
      name: character.name,
      power: character.power
    });
  }
  public deleteCharacterByIndex(index : number) : void{
    this.characters.splice(index,1);
    console.log(index);
  }
}
