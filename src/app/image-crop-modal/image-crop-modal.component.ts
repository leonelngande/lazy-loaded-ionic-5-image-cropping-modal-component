import {ChangeDetectionStrategy, Component, Input, NgModule, OnInit} from '@angular/core';
import {IonicModule, ModalController} from '@ionic/angular';
import {ImageCroppedEvent, ImageCropperModule} from 'ngx-image-cropper';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-image-crop-modal',
  templateUrl: './image-crop-modal.component.html',
  styleUrls: ['./image-crop-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCropModalComponent implements OnInit {

  croppedImageBase64 = '';
  /**
   * Image to be cropped as a base64 string.
   * Should be passed in from the component calling this modal.
   */
  @Input() imageBase64 = '';

  constructor(
      private modalController: ModalController
  ) { }

  ngOnInit() {
    //
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImageBase64 = event.base64;
  }

  dismissModal(croppedImageBase64?: string) {
    this.modalController.dismiss({croppedImageBase64});
  }

}

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ImageCropperModule,
  ],
  declarations: [ImageCropModalComponent]
})
class ImageCropModalModule {
}
