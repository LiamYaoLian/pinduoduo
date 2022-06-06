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
}
