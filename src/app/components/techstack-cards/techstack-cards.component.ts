import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-techstack-cards',
  imports: [
    CommonModule
  ],
  templateUrl: './techstack-cards.component.html',
  styleUrl: './techstack-cards.component.scss'
})
export class TechstackCardsComponent {
  @Input() title: string = 'Title';
  
  // @Input() contents: { svg: { path: string, fill: string }[], viewBox: string, name: string}[] = [];
  @Input() contents: { svg: SafeHtml, name: string}[] = [];
}
