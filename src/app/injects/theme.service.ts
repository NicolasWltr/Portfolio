import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private prefersDarkMode: boolean;
  private darkModeChangedManually: boolean = false;

  constructor() {
    this.prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.updateTheme();
    this.listenForChanges();
  }

  private listenForChanges() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      if (this.darkModeChangedManually) {
        return;
      }
      this.prefersDarkMode = event.matches;
      this.updateTheme();
    });
  }

  private updateTheme() {
    if (this.prefersDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }

  toggleDarkMode() {
    this.prefersDarkMode = !this.prefersDarkMode;
    this.darkModeChangedManually = true;
    this.updateTheme();
  }

  setDarkMode() {
    this.prefersDarkMode = true;
    this.darkModeChangedManually = true;
    this.updateTheme();
  }

  setLightMode() {
    this.prefersDarkMode = false;
    this.darkModeChangedManually = true;
    this.updateTheme();
  }

  setAutoDarkMode() {
    this.darkModeChangedManually = false;
    this.prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.updateTheme();
  }
}
