import { Component } from '@angular/core';
import { ScrollIndComponent } from '../../components/scroll-ind/scroll-ind.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    ScrollIndComponent
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
