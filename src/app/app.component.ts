import { Component } from '@angular/core';
import { WelcomeComponent } from './sections/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { ConstructionComponent } from './sections/construction/construction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    WelcomeComponent,
    HeaderComponent,
    ConstructionComponent
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
