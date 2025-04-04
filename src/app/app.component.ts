import { Component, ElementRef, HostListener, isDevMode, Query, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { WelcomeComponent } from './sections/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { ConstructionComponent } from './sections/construction/construction.component';
import { SideNavigationComponent } from "./components/side-navigation/side-navigation.component";
import { SideNavService } from './injects/sideNav/side-nav.service';
import { ExperienceComponent } from './sections/experience/experience.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    WelcomeComponent,
    HeaderComponent,
    ConstructionComponent,
    SideNavigationComponent,
    SideNavigationComponent,
    ExperienceComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  dev = isDevMode;

  @ViewChildren('section', {read: ElementRef}) sections!: QueryList<ElementRef>;

  constructor(private sideNav: SideNavService) {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    let currentIndex = 0;

    this.sections.forEach((section, index) => {
      if (section.nativeElement.offsetTop - window.scrollY < window.innerHeight / 2 || (section.nativeElement.offsetTop + section.nativeElement.children[0]!.offsetHeight - (window.scrollY + window.innerHeight)) < 20) {
        currentIndex = index;
      }
    });
    this.sideNav.currentSection.set(currentIndex);
  }
}
