import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './sections/welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WelcomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor() { 
    console.log("Remove Constructor from AppComponent\nRemove comentet part from index.html\nAlso remove the inline style height from the body in index.html");
  }
}
