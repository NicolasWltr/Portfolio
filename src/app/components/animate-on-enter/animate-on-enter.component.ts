import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'wrap-animate-on-enter',
  imports: [
    CommonModule
  ],
  templateUrl: './animate-on-enter.component.html',
  styleUrl: './animate-on-enter.component.scss'
})
export class AnimateOnEnterComponent implements AfterViewInit{
  @Input() animationType: "slide-left" | "slide-right" | "slide-up" | "rotate-left" | "rotate-right" = "slide-up";
  @Input() bouncy: boolean = false;
  @Input() transformOrigin: string = "50% 50%";
  @Input() duration: number = 500;
  @Input() delay: number = 0;
  @Input() offset: number = 0;
  @Input() alwaysOnTop: boolean = true;

  wasOnScreen: boolean = false;

  private observer?: IntersectionObserver;

  @ViewChild('wrapper') private wrapper!: ElementRef;
  @ViewChild('animator') private animator!: ElementRef;

  constructor(private el: ElementRef) {
    // el.nativeElement.classList.add('z-10');
  }
  
  ngAfterViewInit(): void {
    this.animator.nativeElement.style.setProperty('transition-duration', this.duration + 'ms');
    this.animator.nativeElement.style.setProperty('transition-delay', this.delay + 'ms');
    this.animator.nativeElement.style.setProperty('transform-origin', this.transformOrigin);

    const rootM = '0px 0px -' + this.offset + 'px 0px';
    console.log(rootM);
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.wasOnScreen = true;
        }
      });
    }, {
      root: null,
      rootMargin: rootM,
      threshold: 0
    });
  
    this.observer.observe(this.wrapper.nativeElement);
  }
}
