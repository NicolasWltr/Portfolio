import { Component } from '@angular/core';
import { TechstackCardsComponent } from "../../components/techstack-cards/techstack-cards.component";
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AnimateOnEnterComponent } from '../../components/animate-on-enter/animate-on-enter.component';

@Component({
  selector: 'app-about-me',
  imports: [
    TechstackCardsComponent,
    CommonModule,
    AnimateOnEnterComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  techStack: { title: string, contents: string[] }[];
  
  constructor() {
    this.techStack = [
      { title: 'Languages', contents: [
        'Java',
        'JavaScript',
        'TypeScript',
        'Python',
        'C#',
        'Swift'
      ]},
      { title: 'Frontend', contents: [
        'Angular',
        'Tailwind CSS',
        'SwiftUI'
      ]},
      { title: 'Backend', contents: [
        'Flask',
        'NestJS',
        'NodeJS',
        'Socket.IO'
      ]},
      { title: 'Databases', contents: [
        'SQLite',
        "Firebase"
      ]},
      { title: 'Game Engines', contents: [
        'Unity'
      ]}
    ];;
  }
}
