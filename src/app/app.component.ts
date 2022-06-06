import {Component} from '@angular/core';
interface TopMenu {
  title: string;
  link?: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topMenu: TopMenu[] = [
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
}
