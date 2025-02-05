import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: '../../counter.component.html',
  standalone: false
})
export class CounterComponent{
  public counter: number;
  constructor(){
    this.counter = 10;
  }

  public increaseBy(value : number): void{
    this.counter +=value;
  }
  public resetCounter(){
    this.counter = 10;
  }
}
