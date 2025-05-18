import { Component } from '@angular/core';
import { PhotoService } from "../services/photo.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  showPhotos: boolean = false; // Nueva propiedad para controlar la visibilidad

  constructor(public photoService: PhotoService) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async loadPhotos() {
  if (!this.showPhotos) {
    await this.photoService.loadSaved();
  }
  this.showPhotos = !this.showPhotos;
  }
  takePhoto(quality: number) {
    this.photoService.addNewToGallery(quality);
  }
}
