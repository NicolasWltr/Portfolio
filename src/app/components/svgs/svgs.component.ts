import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svgs',
  imports: [
    CommonModule
  ],
  templateUrl: './svgs.component.html',
  styleUrl: './svgs.component.scss'
})
export class SvgsComponent {
  @Input() name: string = '';
  flipped: boolean = false;
  static current: SvgsComponent | null = null;
  isTouchDevice: boolean = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  flip() {
    if (SvgsComponent.current && SvgsComponent.current !== this) { 
      SvgsComponent.current.flipped = false;
    }
    this.flipped = !this.flipped;
    SvgsComponent.current = this.flipped ? this : null;
  }
}
