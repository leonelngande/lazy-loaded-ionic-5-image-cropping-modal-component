import { Component } from '@angular/core';
import {ImageCropModalService} from '../services/image-crop-modal.service';
import {ImageService} from '../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  originalImageBase64: string;
  croppedImageBase64: string;

  constructor(
      private imageCropModalService: ImageCropModalService,
      private imageService: ImageService,
  ) {}

  processFile($event: Event) {
    this.imageService.handleImageSelection($event)
        .subscribe(imageBase64 => {

          this.originalImageBase64 = imageBase64;

          this.imageCropModalService.show(imageBase64)
              .then(result => {
                this.croppedImageBase64 = result;

                // Do something with the result, upload to your server maybe?
              })
              .catch(error => {
                // Handle any errors thrown
                console.log(error);
              })

        });
  }
}
