import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ThemeService } from '../../../injects/theme.service';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

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
  seeColorScheme = signal(false);

  constructor(private themeService: ThemeService) {  }

  toggle() {
    this.seeColorScheme.set(!this.seeColorScheme());
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
