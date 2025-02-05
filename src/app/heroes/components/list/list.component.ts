import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames : string[];
  public deletedHero?: string;
  constructor(){
    this.heroNames = ['Spider Man', 'Iron Man', 'Hulk', 'She Hulk', 'Thor'];
    this.deletedHero = '';
  }
  public deleteLastHero(): void{
    this.deletedHero = this.heroNames.pop()
  }

}
