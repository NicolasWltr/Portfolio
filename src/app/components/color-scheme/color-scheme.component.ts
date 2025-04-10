import { CommonModule } from '@angular/common';
import { Component, WritableSignal } from '@angular/core';
import { ThemeService } from '../../injects/theme/theme.service';


@Component({
  selector: 'app-color-scheme',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './color-scheme.component.html',
  styleUrl: './color-scheme.component.scss'
})
export class ColorSchemeComponent {
  prefersDarkMode: WritableSignal<boolean>;


  constructor(private themeService: ThemeService) {  
    this.prefersDarkMode = this.themeService.prefersDarkMode;
  }

  toggle() {
    // this.seeColorScheme.set(!this.seeColorScheme());
    this.themeService.toggleDarkMode();
  }

  setAutoDarkMode() {
    this.themeService.setAutoDarkMode();
    this.toggle();
  }

  setDarkMode() {
    this.themeService.setDarkMode();
    this.toggle();
  }

  setLightMode() {
    this.themeService.setLightMode();
    this.toggle();
  }
}
