import { Component, signal } from "@angular/core";

@Component({
  templateUrl:'./counter-page.component.html',
  styles:`
    button{
      padding: 5px;
      margin: 10px, 15px;
      width: 75px;
    }
  `
})
export class CounterPageComponent{
  counter = 0;
  counterSignal = signal(10);

  increaseBy(value: number){
    this.counter += value;
    this.counterSignal.update( (current) => current + value );
  }

  reset(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
