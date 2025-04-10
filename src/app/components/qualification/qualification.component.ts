import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qualification',
  imports: [
    CommonModule
  ],
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.scss'
})
export class QualificationComponent {
  @Input() work: boolean = false;
}
