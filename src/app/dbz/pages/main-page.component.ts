import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from '../interfaces/characterInterface';
import { CharacterDBZ } from '../classes/CharacterDBZ';
import { DbzService } from '../services/dbz/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})

export class MainPageComponent  {
  constructor(private dbzService : DbzService) {}

  public getCharacters() : CharacterInterface[] {
    return this.dbzService.getCharacters();
  }
  public saveCharacter(character : CharacterInterface): void{
    this.dbzService.saveCharacter(character);
  }
  public deleteCharacterById(id : string) : void{
    this.dbzService.deleteCharacterByIndex(id);
  }

}
