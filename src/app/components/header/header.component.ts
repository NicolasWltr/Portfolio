import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ThemeService } from '../../injects/theme.service';
import { ColorSchemeComponent } from './color-scheme/color-scheme.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ColorSchemeComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) { }

  setAutoDarkMode() {
    this.themeService.setAutoDarkMode();
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  @ViewChild('nameHeader') name!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
      this.name.nativeElement.style.maxWidth = "0rem";
    } else {
      this.name.nativeElement.style.maxWidth = "";
    }
  }
}
