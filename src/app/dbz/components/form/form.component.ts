import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterInterface } from '../../interfaces/characterInterface';

@Component({
  selector: 'app-component-form',
  standalone: false,

  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  onNewCharacter : EventEmitter<CharacterInterface> = new EventEmitter()

  public character: CharacterInterface;

  constructor(){
    this.character = {
      name: '',
      power: 0,
    }
  }

  public emitCharacter(): void{

    if(this.character.name.length ===0 ){
      return;
    }

    this.onNewCharacter.emit(this.character);
    this.character.name = '';
    this.character.power = 0;
    console.log(this.character);
  }
}
