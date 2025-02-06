import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterInterface } from '../../interfaces/characterInterface';
import { CharacterDBZ } from '../../classes/CharacterDBZ';

@Component({
  selector: 'app-component-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  onIndex : EventEmitter<number> = new EventEmitter();

  public title : string = 'Lista de heroes'
  public charactersDBZ : CharacterDBZ = new CharacterDBZ();

  @Input()
  public dbzList : CharacterInterface[];

  constructor(){
    this.dbzList = [];
  }
  public getDBZList(): CharacterInterface[]{
    return this.dbzList;
  }
  public emitIndex(index : number) : void{
    this.onIndex.emit(index);
    console.log(index);
  }
}
