import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiService {
  // Signal to track if sidebar is expanded
  isSidebarVisible = signal<boolean>(true);

  toggleSidebar() {
    this.isSidebarVisible.update(v => !v);
  }
}