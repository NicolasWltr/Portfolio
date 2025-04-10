import { Component, WritableSignal } from '@angular/core';
import { SingleProjectComponent } from "../../components/single-project/single-project.component";
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../injects/theme/theme.service';
import { SvgsComponent } from "../../components/svgs/svgs.component";

@Component({
  selector: 'app-projects',
  imports: [
    SingleProjectComponent,
    CommonModule,
    SvgsComponent
],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  dark: WritableSignal<boolean>;
  constructor(private themeService: ThemeService) {
    this.dark = this.themeService.prefersDarkMode
  }
}
