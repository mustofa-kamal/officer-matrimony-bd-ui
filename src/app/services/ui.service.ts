import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiService {
  // Sidebar starts as hidden on mobile by default
  isSidebarVisible = signal<boolean>(false);

  toggleSidebar() {
    // 1. Toggle the value once
    const newState = !this.isSidebarVisible();
    this.isSidebarVisible.set(newState);

    // 2. Apply "Scroll-Lock" logic to the <body>
    // This is critical for 100% mobile overlays to prevent screen shifting
    if (newState) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
  }
}