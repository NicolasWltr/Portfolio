import { Component, isDevMode } from '@angular/core';
import { WelcomeComponent } from './sections/welcome/welcome.component';
import { HeaderComponent } from './sections/header/header.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from "./sections/about-me/about-me.component";
import { ProjectsComponent } from "./sections/projects/projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    WelcomeComponent,
    HeaderComponent,
    ExperienceComponent,
    AboutMeComponent,
    ProjectsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  dev = isDevMode;
}
