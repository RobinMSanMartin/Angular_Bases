import { Component } from "@angular/core";

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

  increaseBy(value: number){
    this.counter += value;
  }

  reset(){
    this.counter = 0;
  }
}
