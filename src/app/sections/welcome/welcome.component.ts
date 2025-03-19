import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ScrollIndComponent } from '../../components/scroll-ind/scroll-ind.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    HeaderComponent,
    ScrollIndComponent
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
