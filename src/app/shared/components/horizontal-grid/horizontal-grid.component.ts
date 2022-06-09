import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = '';
  inputHandler = (ev: Event) => {this.username = (ev.target as HTMLInputElement).value};

}
