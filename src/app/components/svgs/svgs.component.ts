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

}
