import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-jo',
  templateUrl: './jo.component.html',
  styleUrls: ['./jo.component.css']
})
export class JoComponent implements OnInit {
  @Input() i: string;
  constructor() { }

  ngOnInit(): void {
  }

}
