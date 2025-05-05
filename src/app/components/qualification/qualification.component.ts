import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AnimateOnEnterComponent } from "../animate-on-enter/animate-on-enter.component";
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-qualification',
  imports: [
    CommonModule,
    AnimateOnEnterComponent
],
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.scss'
})
export class QualificationComponent implements OnInit {
  @Input() work: boolean = false;
  public split: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    
  }

  ngOnInit(): void {
    this.breakpointObserver.observe('(min-width: 768px)').subscribe((state: BreakpointState) => {
      console.log(state);
      if (state.matches) {
        this.split = false;
      } else {
        this.split = true;
      }
    });
  }
}
