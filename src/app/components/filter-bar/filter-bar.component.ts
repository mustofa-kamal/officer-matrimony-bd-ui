import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterService } from '../../services/filter.service'; // Adjust path if needed
import { FormsModule } from '@angular/forms'; // <--- Add this

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss'
})
export class FilterBarComponent {
  // Inject the service here
  // Making it 'public' allows the HTML template to access it directly
  public filterService = inject(FilterService);
}