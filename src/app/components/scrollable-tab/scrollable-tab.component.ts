import {Component, Input, OnInit} from '@angular/core';

export interface TopMenu {
  title: string;
  link?: string;
}


@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedIndex = -1;
  title = 'PDD';
  @Input() menu: TopMenu[] = [];
}
