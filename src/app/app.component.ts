import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { FilterService } from './services/filter.service'; // 1. Import it

// 1. You must import these two
import { UiService } from './services/ui.service'; 
import { ProfileService } from './services/profile.service'; 

@Component({
  selector: 'app-root',
  standalone: true,
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

  // 2. You must inject them as PUBLIC
  public uiService = inject(UiService);
  public profileService = inject(ProfileService); 
  public filterService = inject(FilterService); // 2. Inject it here
}