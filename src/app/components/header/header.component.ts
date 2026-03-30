import { Component, inject } from '@angular/core'; // Add inject
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service'; // Import service

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // Inject it here as public
  public uiService = inject(UiService);

  onPost() {
    console.log('Post button clicked');
  }
}