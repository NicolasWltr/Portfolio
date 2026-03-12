import { Component } from '@angular/core';
import { WelcomeComponent } from "../welcome/welcome.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ExperienceComponent } from "../experience/experience.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent, AboutMeComponent, ProjectsComponent, ExperienceComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
