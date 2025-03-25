import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
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
  currentSection = signal(0);

  @ViewChild('sideNav') sideNav!: ElementRef;
  @ViewChild('rotate') rotate!: ElementRef;

  @ViewChildren('side', { read: ElementRef }) side!: QueryList<ElementRef>;
  
  constructor(private sideNavService: SideNavService) {
    this.currentSection = this.sideNavService.currentSection;
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
    this.rotateSideNav();
  }

  positionSideNav() {
    let topPx = Math.max(window.innerHeight - window.scrollY, 0);

    this.sideNav.nativeElement.style.top = topPx + "px";
  }

  rotateSideNav() {
    this.rotate.nativeElement.style.transform = `rotate(${this.currentSection() * 15}deg)`;

    this.calcOpacity();
  }

  calcOpacity() {
    this.side.forEach((side, index) => {
      let opacity = 1 - (Math.abs(this.currentSection() - index) / 3);
      console.log(opacity);
      side.nativeElement.style.opacity = opacity
      side.nativeElement.style.fontWeight = opacity === 1 ? "900" : opacity > 0.5 ? "500" : "100";
    });
  }
}
