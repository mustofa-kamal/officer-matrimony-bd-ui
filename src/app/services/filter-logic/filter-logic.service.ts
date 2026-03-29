import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FilterService {
  // Signal to hold the list of active strings
  activeFilters = signal<string[]>([]);

  toggle(filter: string) {
    this.activeFilters.update(current => 
      current.includes(filter) 
        ? current.filter(f => f !== filter) 
        : [...current, filter]
    );
  }

  reset() {
    this.activeFilters.set([]);
  }
}