import { Component } from '@angular/core';
import { CharacterInterface } from '../../interfaces/characterInterface';
import { CharacterDBZ } from '../../classes/CharacterDBZ';

@Component({
  selector: 'app-component-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public title : string = 'Lista de heroes'
  private dbzList : CharacterInterface[];
  public charactersDBZ : CharacterDBZ = new CharacterDBZ();
  constructor(){
    this.dbzList = this.charactersDBZ.getCharacters();
  }
  public getDBZList(): CharacterInterface[]{
    return this.dbzList;
  }
}
