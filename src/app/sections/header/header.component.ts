import { Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';
import { ThemeService } from '../../injects/theme/theme.service';
import { CommonModule } from '@angular/common';
import { ColorSchemeComponent } from '../../components/color-scheme/color-scheme.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ColorSchemeComponent,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private prevScroll = 0;
  darkMode = signal(false);

  constructor(private themeService: ThemeService) { 
    this.darkMode = this.themeService.prefersDarkMode;
  }
  
  @ViewChild('nameHeader') name!: ElementRef;
  @ViewChild('header') header!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    let scrollY = window.scrollY;
    
    if (scrollY > (document.body.offsetHeight - window.innerHeight)) {
      scrollY = window.innerHeight;
    }

    if (scrollY > this.prevScroll) {
      this.prevScroll = scrollY;
      if (scrollY < this.header.nativeElement.offsetHeight) return;
      this.header.nativeElement.style.transform = "translateY(-200%)";
      this.name.nativeElement.style.maxWidth = "0rem";
    } else {
      if (this.prevScroll - 50 < scrollY) return;
      this.header.nativeElement.style.transform = "";
      this.name.nativeElement.style.maxWidth = "";
      this.prevScroll = scrollY;
    }
  }
}
