import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Import your custom components here
import { HeaderComponent } from './components/header/header.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Add them to this imports array
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FilterBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'officer-matrimony-bd-ui';
}