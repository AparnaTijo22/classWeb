import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  myName = "Aparna Tijo";
  currentDate = new Date();
  emp = {name: "Alex", age: '25', address:{a1: 'Paris', a2: 'France'}};
}
