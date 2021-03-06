import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageSlider} from "../image-slider";

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
  @Input() backgroundColor = '#fff';
  @Input() titleColor = 'blue';
  @Input() titleActiveColor = 'yellow';
  @Output() tabSelected = new EventEmitter();



  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menu[this.selectedIndex]);
  }




}
