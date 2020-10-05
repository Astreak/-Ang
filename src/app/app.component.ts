import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Prj";
  age: number = 123;
  constructor() {
    this.name = "LOL";
    this.changeAge();
  }
  changeAge() {
    this.age = 12;
  }
}
