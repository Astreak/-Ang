import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ok',
  templateUrl: './ok.component.html',
  styleUrls: ['./ok.component.css']
})
export class OKComponent implements OnInit {
  list: string[];
  constructor() { }

  ngOnInit(): void {
    this.list = [
      "OK","Alright","LOLP"
    ]
  }


}
