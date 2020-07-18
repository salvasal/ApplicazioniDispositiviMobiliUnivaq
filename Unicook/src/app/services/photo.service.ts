import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, FilesystemDirectory,
  CameraSource } from '@capacitor/core';
import {Photo} from '../models/photo.models';
const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photo[] = [];
  private PHOTO_STORAGE = 'photos';

  constructor() { }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: 'soon...',
      webviewpath: capturedPhoto.webPath
    });

    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos.map(p => {
        const photoCopy = { ...p };
        delete photoCopy.base64;

        return photoCopy;
      }))
    });
  }

  public async loadSaved() {
    const photos = await Storage.get({ key: this.PHOTO_STORAGE });
    this.photos = JSON.parse(photos.value) || [];

    for (const photo of this.photos) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: FilesystemDirectory.Data
      });

      photo.base64 = `data:image/jpeg;base64,${readFile.data}`;
    }
  }

  public async removeData() {
    // @ts-ignore
    this.photos = await Storage.clear();
    this.photos = [];
  }
}
