import {Component} from '@angular/core';
import {ImageSlider} from "./components";
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

  //
  imageSliders : ImageSlider[] = [
    {
      imgUrl: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
      link: '123',
      caption: '123'
    },
    {
      imgUrl: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
      link: '123',
      caption: '123'
    }
  ]

  handleTabSelected(topMenu: TopMenu) {
    console.log(topMenu);
  }
}
