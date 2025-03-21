import { Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';
import { ThemeService } from '../../injects/theme.service';
import { ColorSchemeComponent } from './color-scheme/color-scheme.component';
import { CommonModule } from '@angular/common';

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
    const scrollY = window.scrollY;
    
    if (scrollY < this.header.nativeElement.offsetHeight) return;

    if (scrollY > this.prevScroll) {
      this.header.nativeElement.style.transform = "translateY(-200%)";
      this.name.nativeElement.style.maxWidth = "0rem";
    } else {
      this.header.nativeElement.style.transform = "";
      this.name.nativeElement.style.maxWidth = "";
    }
    this.prevScroll = scrollY;
  }
}
