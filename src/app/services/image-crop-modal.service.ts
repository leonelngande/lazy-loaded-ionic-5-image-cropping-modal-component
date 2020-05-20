import {Injectable} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ImageCropModalService {

  constructor(
      public modalController: ModalController,
  ) { }

  async show(imageBase64: string): Promise<string | null> {

    const { ImageCropModalComponent } = await import(`../image-crop-modal/image-crop-modal.component`);

    const modal: HTMLIonModalElement = await this.modalController.create({
      component: ImageCropModalComponent,
      backdropDismiss: false,
      componentProps: {
        imageBase64
      },
    });

    await modal.present();

    const result = await modal.onWillDismiss();

    if (result.data && result.data.croppedImageBase64) {
      return result.data.croppedImageBase64;
    }

    return null;
  }
}
