import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'; // 1. Import Router
import { UiService } from '../../services/ui.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public uiService = inject(UiService);
  public profileService = inject(ProfileService);
  private router = inject(Router); // 2. Inject Router

  startRegistration() {
    this.profileService.clearSelection();
    
    // 3. Navigate to the URL. This enables the Back button!
    this.router.navigate(['/registration']);
    
    this.uiService.isRegistering.set(true);
    this.uiService.isSidebarVisible.set(false);
  }

  goToHome() {
    // 4. Navigate back to Home
    this.router.navigate(['/']);
    
    this.uiService.isRegistering.set(false);
    this.profileService.clearSelection();
  }
}