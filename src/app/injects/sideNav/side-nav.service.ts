import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  currentSection = signal(0);

  constructor() { }
}
