import { TestBed } from '@angular/core/testing';

import { ImageCropModalService } from './image-crop-modal.service';

describe('ImageCropModalService', () => {
  let service: ImageCropModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageCropModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
