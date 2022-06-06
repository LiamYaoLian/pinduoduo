import { Component, OnInit } from '@angular/core';

interface TopMenu {
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
  menu: TopMenu[] = [
    {
      title: 'Popular',
      link: ''
    },
    {
      title: 'Men\'s',
    },
    {
      title: 'Popular',
      link: ''
    },
    {
      title: 'Popular',
      link: ''
    },
    {
      title: 'Popular',
      link: ''
    },
    {
      title: 'Popular',
      link: ''
    },
    {
      title: 'Popular',
      link: ''
    },
    {
      title: 'Popular',
      link: ''
    },
    {
      title: 'Popular',
      link: ''
    },
    {
      title: 'Popular',
      link: ''
    },
    {
      title: 'Popular',
      link: ''
    },
    {
      title: 'Popular',
      link: ''
    },
    {
      title: 'Popular',
      link: ''
    },
    {
      title: 'Popular',
      link: ''
    },
    {
      title: 'Popular',
      link: ''
    },
    {
      title: 'Popular',
      link: ''
    }
  ];

  handleSelection(index: number) {
    this.selectedIndex = index;
  }

}
