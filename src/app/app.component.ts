import { Component } from '@angular/core';
import { Social } from './models/Social';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lab-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  socials: Social[] = [
    {
      id: 0,
      name: 'Facebook',
      baseLink: 'https://www.facebook.com',
    },
    {
      id: 1,
      name: 'Facebook',
      baseLink: 'https://www.facebook.com',
    },
    {
      id: 2,
      name: 'Facebook',
      baseLink: 'https://www.facebook.com',
    },
    {
      id: 3,
      name: 'Facebook',
      baseLink: 'https://www.facebook.com',
    },
    {
      id: 4,
      name: 'Facebook',
      baseLink: 'https://www.facebook.com',
    },
  ];
}
