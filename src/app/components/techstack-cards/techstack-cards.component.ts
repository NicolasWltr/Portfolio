import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgsComponent } from "../svgs/svgs.component";

@Component({
  selector: 'app-techstack-cards',
  imports: [
    CommonModule,
    SvgsComponent
],
  templateUrl: './techstack-cards.component.html',
  styleUrl: './techstack-cards.component.scss'
})
export class TechstackCardsComponent {
  @Input() title: string = 'Title';
  
  @Input() contents: string[] = [];
}
