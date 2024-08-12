import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>,
<button (click)="this.increaseBy(+1)">+1</button>
<button (click)="this.resetCounter()">Reset</button>
<button (click)="this.increaseBy(-1)">-1</button>
`

})

export class CounterComponent {

    public counter : number=10;

    increaseBy(value:number):void{
      this.counter += value;
    }
     resetCounter(){
      this.counter=10;
     }

   }



