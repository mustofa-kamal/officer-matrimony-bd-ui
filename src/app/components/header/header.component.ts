// src/app/components/header/header.component.ts
import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    public uiService: UiService,
    public profileService: ProfileService
  ) {}

  startRegistration() {
    // Hide details and search results, show registration card
    this.profileService.clearSelection();
    this.uiService.isRegistering.set(true);
    this.uiService.isSidebarVisible.set(false); // Close mobile menu if open
  }

  goToHome() {
  this.uiService.isRegistering.set(false); // Closes Registration
  this.profileService.clearSelection();    // Closes Detail View
  this.uiService.isSidebarVisible.set(false); // Closes Mobile Filters
}
}