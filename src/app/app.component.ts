import { Component, ElementRef, HostListener, isDevMode, Query, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { WelcomeComponent } from './sections/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from "./sections/about-me/about-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    WelcomeComponent,
    HeaderComponent,
    ExperienceComponent,
    AboutMeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  dev = isDevMode;
}
