import { Component } from '@angular/core';
import { Theme } from './models/theme.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dogx';

  currentTheme: Theme = Theme.Light;

  onThemeChange() {
    this.currentTheme = this.currentTheme === Theme.Light ? Theme.Dark : Theme.Light;

    document.body.setAttribute(
      'data-theme',
      this.currentTheme === Theme.Light ? 'light' : 'dark'
    )
  }
}
