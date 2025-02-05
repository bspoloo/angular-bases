import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  private name: string = 'Spider Man';
  private age: number = 45;
  constructor() {}
  public getName(): string {return this.name;}
  public getAge(): number {return this.age;}
  public setName(name: string): void {this.name = name;}
  public setAge(age: number): void {this.age = age;}

  public capitalizedName(): string{
    return this.name.toUpperCase()
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  public resetForm(): void{
    this.name = 'Spider Man';
    this.age = 45;

    document.querySelectorAll('h1').forEach(element => {
      element.innerHTML = '<h1>Formulario Reseteado</h1>'
    });
  }
}
