import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';
import { SideNavService } from '../../injects/sideNav/side-nav.service';

@Component({
  selector: 'app-side-navigation',
  imports: [
    CommonModule
  ],
  templateUrl: './side-navigation.component.html',
  styleUrl: './side-navigation.component.scss'
})
export class SideNavigationComponent implements AfterViewInit{
  rotation = signal(0);

  @ViewChild('sideNav') sideNav!: ElementRef;
  @ViewChild('rotate') rotate!: ElementRef;
  
  constructor(private sideNavService: SideNavService) {
    this.rotation = this.sideNavService.currentSection;
  }

  ngAfterViewInit(): void {
    this.positionSideNav();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.positionSideNav();
    this.rotateSideNav();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.positionSideNav();
    console.log("hi");
  }

  positionSideNav() {
    let topPx = Math.max(window.innerHeight - window.scrollY, 0);

    this.sideNav.nativeElement.style.top = topPx + "px";
  }

  rotateSideNav() {
    this.rotate.nativeElement.style.transform = `rotate(${this.rotation() * 15}deg)`;
  }
}
