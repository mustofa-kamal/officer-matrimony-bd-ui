// src/app/services/image-storage.service.ts
import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase } from 'idb';

@Injectable({ providedIn: 'root' })
export class ImageStorageService {
  private dbPromise: Promise<IDBPDatabase>;

  constructor() {
    this.dbPromise = openDB('OfficerMatrimonyDB', 1, {
      upgrade(db) {
        db.createObjectStore('photos');
      },
    });
  }

  async savePhoto(regId: string, key: string, file: File) {
    const db = await this.dbPromise;
    return db.put('photos', file, `${regId}_${key}`);
  }

  async getPhoto(regId: string, key: string): Promise<File | undefined> {
    const db = await this.dbPromise;
    return db.get('photos', `${regId}_${key}`);
  }

  async clearPhotos(regId: string) {
    const db = await this.dbPromise;
    const keys = ['primary', 'secondary1', 'secondary2'];
    for (const k of keys) {
      await db.delete('photos', `${regId}_${k}`);
    }
  }
}