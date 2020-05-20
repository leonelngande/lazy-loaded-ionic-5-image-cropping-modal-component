import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  /**
   * Creates a FileReader API object
   */
  private fileReader: FileReader = new FileReader();

  constructor() { }

  /**
   * Uses the FileReader API to capture the input field event, retrieve the selected image
   * and return that as a base64 data URL courtesy of an Observable
   *
   * @param event The DOM event that we are capturing from the File input field
   */
  handleImageSelection(event: Event): Observable<string> {
    const file = (<HTMLInputElement>event.target).files[0];

    this.fileReader.readAsDataURL(file);
    return new Observable((observer) => {
      this.fileReader.onloadend = () => {
        observer.next(<string>this.fileReader.result);
        observer.complete();
      };
    });
  }
}
