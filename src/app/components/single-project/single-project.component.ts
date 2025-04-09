import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-project',
  imports: [
    CommonModule
  ],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() name: string = 'Project';
  @Input() reverse: boolean = false;

  @Input() code: string = "";
  @Input() live: string = "";

  @Input() liveExists: boolean = true;
}
