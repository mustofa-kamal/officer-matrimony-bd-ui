import { Component, inject } from '@angular/core';

import { ProfileService } from '../../services/profile.service';
import { UiService } from '../../services/ui.service';
import { FilterBarComponent } from '../../components/filter-bar/filter-bar.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-profiles',
    imports: [FilterBarComponent, RouterLink],
    templateUrl: './profiles.component.html',
    styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {
  public profileService = inject(ProfileService);
  public uiService = inject(UiService);
}